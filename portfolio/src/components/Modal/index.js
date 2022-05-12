import React, { useEffect, replaceState } from "react";
import {Background, Container, BtnDiv, Title, Body, Footer} from "./styles.js";

const ProjectModal = ({ setModalOpen, openModal }) => {

    const enableScroll = () => {
            document.body.style.overflow = 'visible';
            window.location.href = "#projects";    
            
            console.log(document)
            return;
        };
        
        useEffect(() => {
            if (openModal) {
                document.body.style.overflow = 'hidden';
                window.location.href = "#projects";    
            } 
        return;
     }, [openModal]);

  return (
    <Background>
      <Container>
        <BtnDiv>
          <button
            onClick={() => {
              enableScroll()
              setModalOpen(false);
            }}
          >
            X
          </button>
        </BtnDiv>
        <Title>
          <h1>Are You Sure You Want to Continue?</h1>
        </Title>
        <Body>
          <p>The next page looks amazing. Hope you want to go there!</p>
        </Body>
        <Footer>

          <button>Live Link</button>
          <button>Github Link</button>
        </Footer>
      </Container>
    </Background>
  );
}

export default ProjectModal;