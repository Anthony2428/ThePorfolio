import React, { useState } from "react";
import { NavLink, Nav, Bars, NavMenu, Heading } from './navbarStyles';
import Menu from "../Menu";

const NavBar = () => {

  const [openMenu, setMenuOpen] = useState(false);

  return (
    <>
    <Nav id="nav">
    <Bars onClick={(e) => {e.preventDefault(); setMenuOpen(true)}}/>
        <Heading href='#about'>About</Heading>
      <NavMenu>
        <NavLink href="#projects">Projects</NavLink>
      </NavMenu>
    </Nav>
      {openMenu && <Menu setMenuOpen={setMenuOpen} openMenu={openMenu} />}
    </>

  );
}

export default NavBar;