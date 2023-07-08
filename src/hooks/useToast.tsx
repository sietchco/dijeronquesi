import { Box, Heading, Text, useToast as useToastChakraUI } from '@chakra-ui/react'

type Toast = {
  title?: string
  description?: string
}

const useToast = () => {
  const toast = useToastChakraUI({
    position: 'top',
    duration: 40000,
  })

  return {
    custom: (args?: Toast) => {
      const { title = 'Success', description = 'Done without errors!' } = args || {}
      return toast({
        render: () => (
          <Box color="white" maxW="md" shadow="dark-lg" rounded="md" p={4} bg="ui-purple">
            <Heading mb={2} fontSize="xl">
              {title}
            </Heading>
            <Text fontSize="md" lineHeight="normal">
              {description}
            </Text>
          </Box>
        ),
      })
    },
    success: (args?: Toast) => {
      const { title = 'Success', description = 'Done without errors!' } = args || {}
      return toast({
        title,
        description,
        status: 'success',
      })
    },
    error: (args?: Toast) => {
      const { title = 'Error', description = 'Something went wrong!' } = args || {}
      return toast({
        title,
        description,
        status: 'error',
      })
    },
  }
}

export default useToast
