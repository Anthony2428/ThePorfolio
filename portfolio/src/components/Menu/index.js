import React, { useEffect } from "react";
import MenuFooter from "../MenuFooter";
import {Background, Container, BtnDiv, Body, Link} from "./styles.js";

const Menu = ({ setMenuOpen, openMenu }) => {

    const enableScroll = () => {
        window.location.href = "#home";    
        document.body.style.overflowY = 'visible';
        document.body.style.overflowX = 'visible';
            return;
        };

        useEffect(() => {
            if (openMenu) {
                document.body.style.overflowY = 'hidden';
                document.body.style.overflowX = 'hidden';
                window.location.href = "#home";    
            } 
        return;
     }, [openMenu]);

  return (
    <Background id="trigger-menu">
      <Container className="item" data-aos="fade-left" data-aos-anchor="#trigger-menu">
        <BtnDiv>
          <button onClick={() => {enableScroll(); setMenuOpen(false);}}>
            X
          </button>
        </BtnDiv>
        <Body>
          <Link href='#home' onClick={() => { enableScroll(); setMenuOpen(false);}}>Home</Link>
          <Link href='#education' onClick={() => { enableScroll(); setMenuOpen(false);}}>Accreditation</Link>
          <Link href='#about' onClick={() => { enableScroll(); setMenuOpen(false);}}>About</Link>
          <Link href='#projects' onClick={() => { enableScroll(); setMenuOpen(false);}}>Projects</Link>
        <MenuFooter/>
        </Body>
      </Container>
    </Background>
  );
}

export default Menu;