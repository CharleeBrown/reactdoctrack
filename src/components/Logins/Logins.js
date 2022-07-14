import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Logins.module.css';
import {   FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,  Input, Button, Box,Container, Center, Image, Flex, Badge, Text, Spacer, VStack} from '@chakra-ui/react';
import { getValue } from '@testing-library/user-event/dist/utils';
import { restart } from 'nodemon';

function Logins(props) {
  let [count, setCount] = useState(0);
  const [emailError, setEmailError]=useState('');
  let validEmail =new RegExp('/\S+@\S+\. \S+/');
  if(validEmail.test(emailError)){
    setEmailError(true);
  }
  return(
  <div className={styles.Logins}>
            <FormControl>
            
              <Center>
              <Container maxW='lg'>
                
              <FormLabel  htmlFor='namer'> Enter Username {props.name}   </FormLabel>
                <Input id='namer'placeholder='Test' type="email" onChange={e => setCount(e.target.value)} color='black'/>
                <Spacer p={1.5}/>
              <FormLabel htmlFor='passwrd'>Enter Password</FormLabel>
                <Input type='password' onChange={e => setCount(e.target.value)}/>
                <Spacer p={1.5}/>
                <Button onClick={() => alert(count)} colorScheme='blue'>Login</Button>
                </Container>
          </Center>
        </FormControl>
  </div>
);
  }


export default Logins;
