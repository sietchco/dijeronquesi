import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'

import { AuthContextProvider } from '@/context/AuthContext'
import { theme } from '@/styles/chakra-ui'
import { isProd } from '@/utils/env'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: isProd,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <AuthContextProvider>
            <Component {...pageProps} />
          </AuthContextProvider>
        </ChakraProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
