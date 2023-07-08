import React from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'
import { As, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'

export type FormInputProps = {
  errors: FieldErrors<FieldValues>
  inputProps: Record<string, any>
  controlProps: Record<string, any>
  label?: React.ReactNode
  placeholder: string
  as?: As
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { errors, label, placeholder, inputProps, as = 'div', controlProps = {} } = props
  const { name = '' } = inputProps

  return (
    <FormControl as={as} position="relative" isInvalid={!!errors[name]} {...controlProps}>
      {label && (
        <FormLabel fontSize="small" mb={0} htmlFor={name}>
          {label}
        </FormLabel>
      )}

      <Input color="ui-black" id={name} px={2} placeholder={placeholder} {...inputProps} />

      {errors?.[name]?.message && (
        <FormErrorMessage mt={2} position="absolute" top="100%" left={2}>
          <>{errors[name].message}</>
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export default FormInput
