import {
  Box,
  Flex,
  Grid,
  GridItem,
  keyframes,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import CheckBadgeIcon from '@heroicons/react/20/solid/CheckBadgeIcon'
import Head from 'next/head'
import Image from 'next/image'

import FormWaitList from '@/containers/FormWaitList'

const heartbeat = keyframes`  
  0% {
    transform: scale(0.95);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.95);
  }
`
const heartbeatAnimation = `${heartbeat} 2.5s infinite`

export default function Home() {
  return (
    <>
      <Head>
        <title>DijeronQueSi · Waitlist</title>
      </Head>

      <main>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(5, 1fr)']}>
          <GridItem
            colSpan={2}
            as={Flex}
            alignItems="center"
            justifyContent="center"
            flexGrow="1"
            height={['auto', '100vh']}
            bgColor="ui-pink"
            p={8}
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              bgColor="white"
              rounded="full"
              h="300px"
              w="300px"
              shadow="lg"
            >
              <Box animation={heartbeatAnimation}>
                <Image alt="DijeronQueSi Logo" src="/Logo.svg" width="240" height="100" />
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={3}
            as={Flex}
            alignItems="center"
            justifyContent="center"
            flexGrow="1"
            bgColor="ui-purple"
            p={8}
          >
            <Flex flexDirection="column" gap={4} color="ui-white" maxW="2xl">
              <Text>
                <Text as="b">DijeronQueSi</Text> es la herramienta definitiva para una boda feliz.
              </Text>

              <Text>
                Despídete de la confusión y dale la bienvenida a la organización perfecta.
              </Text>

              <Text>
                <Text as="b">DijeronQueSi</Text> hará que tu día especial sea aún más memorable.
              </Text>

              <List as={Flex} flexDirection="column" gap={4}>
                <ListItem as={Flex} alignItems="flex-start">
                  <ListIcon as={CheckBadgeIcon} fontSize="5xl" />
                  Gestión del tiempo: La planificación de una boda implica muchas tareas y plazos
                  que deben cumplirse. Una aplicación de planificación de bodas puede ayudar a
                  administrar el tiempo de manera eficiente, proporcionando recordatorios y
                  seguimiento de tareas para que las parejas no se sientan abrumadas.
                </ListItem>

                <ListItem as={Flex} alignItems="flex-start">
                  <ListIcon as={CheckBadgeIcon} fontSize="5xl" />
                  Organización de invitados: Gestionar la lista de invitados, enviar invitaciones y
                  realizar un seguimiento de las confirmaciones puede ser un desafío.
                </ListItem>

                <ListItem as={Flex} alignItems="flex-start">
                  <ListIcon as={CheckBadgeIcon} fontSize="5xl" />
                  Música perfecta: Encontrar y listar canciones para la ceremonia, el cóctel y la
                  recepción puede ser un desafío.
                </ListItem>

                <ListItem as={Flex} alignItems="flex-start">
                  <ListIcon as={CheckBadgeIcon} fontSize="5xl" />
                  Coordinación de proveedores: Encontrar y coordinar proveedores de bodas, como
                  fotógrafos, floristas o músicos, puede ser complicado.
                </ListItem>

                <ListItem as={Flex} alignItems="flex-start">
                  <ListIcon as={CheckBadgeIcon} fontSize="5xl" />
                  Inspiración y diseño: Muchas parejas buscan inspiración y consejos para el diseño
                  y la decoración de su boda.
                </ListItem>
              </List>

              <Text>
                ¿Listo para una nueva forma de planificar tu boda? Únete a nuestra lista de espera y
                sé parte de nuestra comunidad antes del gran lanzamiento. Obtén acceso anticipado y
                beneficios exclusivos.
              </Text>

              <FormWaitList />
            </Flex>
          </GridItem>
        </Grid>
      </main>
    </>
  )
}
