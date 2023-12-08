import React from 'react';
import { TbWorld, TbUser } from 'react-icons/tb';
import { Box, Text, Flex, Heading, Button, ChakraProvider, Divider, Center, ButtonGroup, Input, RadioGroup, Radio, Stack } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Flex
        as="nav"
        backgroundColor="#f5f2f2"
        color="#696263"
        direction="column"
        p={3}>
        <Flex
          justify="end"
          align="center"
          marginBottom="10px">
          <TbWorld/>
          <Text fontSize="sm">Deutsch (Deutschland)</Text>
          <Center height="15px" width="10px">
            <Divider orientation='vertical'/>
          </Center>
          <TbUser/>
          <Text fontSize="sm">email@email.com</Text>
        </Flex>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          padding="15px"
          p={2}
        >
          <Heading size="md">Stellenmarkt</Heading>
          <ButtonGroup>
            <Button color="#696263" variant="link" paddingRight="15px">Stellenangebote</Button>
            <Button color="#696263" variant="link" paddingRight="15px">Stellen suchen</Button>
            <Button color="#696263" variant="link" paddingRight="15px">Kandidat - Home</Button>
            <Button color="#696263" variant="link" paddingRight="15px">Stellen-Alerts</Button>         
          </ButtonGroup>
        </Flex>
        <Flex maxWidth="80vw" align="center">
          <Heading>Meine Daten</Heading>
          <Text>Erforderliches Feld</Text>
          <Text>Wie haben Sie von uns erfahren?</Text>
          <Input placeholder=""></Input>  
          <Text>Haben Sie bereits früher bei ZEISS gearbeitet? Falls ja, beantworten Sie bitte die
            nachfolgende Frage. Falls nein, machen Sie bitte mit der nächsten Seite weiter.</Text>
          <RadioGroup>
            <Stack direction="column">
              <Radio>Ja</Radio>
              <Radio>Nein</Radio>
            </Stack>
          </RadioGroup>

        </Flex>
        
      </Flex>
      
    </ChakraProvider>
  );
}

export default App;
