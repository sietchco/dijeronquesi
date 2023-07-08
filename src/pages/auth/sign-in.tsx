import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Box, Button, Grid, GridItem } from '@chakra-ui/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'

import FormInput from '@/components/FormInput'
import { auth } from '@/config/firebase'
import useToast from '@/hooks/useToast'
import SimpleLayout from '@/layouts/SimpleLayout'

interface SignInFormValues {
  email: string
  password: string
}

const SignInPage = () => {
  const toast = useToast()
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset: resetForm,
  } = useForm<SignInFormValues>()
  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    try {
      const { email, password } = data
      await signInWithEmailAndPassword(auth, email, password)

      resetForm()
      router.push('/dashboard')
    } catch (error: any) {
      toast.error({
        description: error?.message,
      })
      console.error(error)
    }
  }

  return (
    <SimpleLayout>
      <Grid as="form" gap={2} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          as={GridItem}
          errors={errors}
          placeholder="Email"
          inputProps={{ ...register('email', { required: true }) }}
        />
        <FormInput
          as={GridItem}
          errors={errors}
          placeholder="Password"
          inputProps={{ ...register('password', { required: true }), type: 'password' }}
        />

        <Box as={GridItem}>
          <Button isLoading={isSubmitting} type="submit" w="full" colorScheme="pink">
            Sign In
          </Button>
        </Box>
      </Grid>
    </SimpleLayout>
  )
}

export default SignInPage
