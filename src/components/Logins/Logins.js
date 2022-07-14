import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Logins.module.css';
import {   FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,  Input, Button, Box,Container, Center, Image, Flex, Badge, Text, Spacer, VStack} from '@chakra-ui/react';
import { getValue } from '@testing-library/user-event/dist/utils';

function Logins(props) {
  let [count, setCount] = useState(0);
 
  return(
  <div className={styles.Logins}>
            <FormControl>
              <Container maxW='lg'>
              <FormLabel htmlFor='namer'> Hello, {props.name}   </FormLabel>
                <Input id='namer'placeholder='Test' onChange={e => setCount(e.target.value)} color='black'/>
              <FormLabel htmlFor='passwrd'>Enter Password</FormLabel>
                <Input type='password' onChange={e => setCount(e.target.value)}/>
                <FormHelperText>We'll never share your email.</FormHelperText>
                <Button onClick={() => alert(count)} colorScheme='blue'>Submit Email</Button>
                </Container>
        <Spacer />
        </FormControl>
  </div>
);
  }


export default Logins;
