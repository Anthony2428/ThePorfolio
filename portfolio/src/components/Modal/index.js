import React, { useEffect } from "react";
import {Background, Container, BtnDiv, Title, Body, Footer, LiveLink, GitHubLink} from "./styles.js";

const ProjectModal = ({ setModalOpen, openModal, modalData }) => {

    const enableScroll = () => {
        window.location.href = "#projects";    
        document.body.style.overflowY = 'visible';
        document.querySelector("#home > div.sc-gKXOVf.iWZMjS > nav").style.visibility = 'visible';            
            return;
        };

        useEffect(() => {
            if (openModal) {
                document.body.style.overflowY = 'hidden';
                document.querySelector("#home > div.sc-gKXOVf.iWZMjS > nav").style.visibility = 'hidden';
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
          <h1 style={{padding: '10px'}}>{modalData.name}</h1>
        </Title>
        <Body>
          <p>{modalData.description}</p>
        </Body>
        <Footer>

          <LiveLink href={modalData.gitLink}>Live</LiveLink>
          <GitHubLink href={modalData.liveLink}>GitHub</GitHubLink>
          
        </Footer>
      </Container>
    </Background>
  );
}

export default ProjectModal;