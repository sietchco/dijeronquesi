import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Flex } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'

import FormInput from '@/components/FormInput'
import useToast from '@/hooks/useToast'
import { addEmailToWaitList, TWaitList, WaitListSchema } from '@/models/WaitList'

const FormWaitList = () => {
  const toast = useToast()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset: resetForm,
  } = useForm<TWaitList>({
    resolver: zodResolver(WaitListSchema),
  })

  const onSubmit: SubmitHandler<TWaitList> = async (data) => {
    try {
      const { email } = data
      await addEmailToWaitList(email)
      toast.custom({
        title: '¡Gracias por registrarte!',
        description:
          'Pronto recibirás una invitación y podrás comenzar a planear el día más felíz de tu vida.',
      })
      resetForm()
    } catch (error) {}
  }

  return (
    <Flex
      as="form"
      flexDirection={['column', 'row']}
      gap={4}
      alignItems="flex-end"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        label="Email al cual enviaremos la invitación"
        errors={errors}
        placeholder="ej. jon@snow.com"
        inputProps={{ ...register('email', { required: true }) }}
        controlProps={{ flex: 1 }}
      />

      <Button w={['full', 'auto']} isLoading={isSubmitting} colorScheme="pink" type="submit">
        Quiero acceso a la plataforma!
      </Button>
    </Flex>
  )
}

export default FormWaitList
