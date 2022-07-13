import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logins.module.css';
import { Input, Button, Box,Container, Center, Image, Flex, Badge, Text, Spacer, VStack} from '@chakra-ui/react';

const Logins = (props) => (
  
  <div className={styles.Logins}>
    <VStack>
      
      <Container maxW='lg' bg='blue.600' color='white'>
            <h1>Hello, {props.name}</h1>
      </Container>
        
        <Spacer />
        <Container maxW='lg' bg='blue.600' color='white' maxH='lg'>
            <Box padding='4'>
            <Input placeholder='Test' color='black'/>
            <Button onClick={() => console.log("test")} colorScheme='blue'></Button>
            </Box>
        
        </Container>
    </VStack>
  </div>
);


export default Logins;
