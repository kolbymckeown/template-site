// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        
        MENS
      </a>
      <a href="/">
       
        WOMENS
        </a>
      <a href="/">
        
       WATCHES
        </a>
        <a href="/">
        
        ACCESSORIES
         </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;