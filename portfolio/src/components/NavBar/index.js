import React from "react";
import { NavLink, Nav, Bars, NavMenu, Heading } from './navbarStyles';

const NavBar = () => {

  return (
    <Nav>
    <Bars />
      <Heading href='#about'>About</Heading>
      <NavMenu>
        <NavLink href="#projects">Projects</NavLink>
      </NavMenu>
    </Nav>

  );
}

export default NavBar;