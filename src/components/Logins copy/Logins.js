import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Logins.module.css';
import { Menu, 
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Text, Spacer, VStack} from '@chakra-ui/react';
import { getValue } from '@testing-library/user-event/dist/utils';
import { restart } from 'nodemon';

const Logins = () => (
  <div className={styles.Logins}>
    <Menu>
    <MenuButton rightIcon={<ChevronDownIcon />}>
      Options
      </MenuButton>
    </Menu>
  </div>
);

Logins.propTypes = {};

Logins.defaultProps = {};

export default Logins;
