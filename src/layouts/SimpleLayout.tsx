import React, { PropsWithChildren } from 'react'
import { Box, Flex } from '@chakra-ui/react'

const SimpleLayout = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <Flex minH="100vh" py="8" alignItems="center" justifyContent="center">
      <Box maxW="5xl" w="4xl">
        {children}
      </Box>
    </Flex>
  )
}

export default SimpleLayout
