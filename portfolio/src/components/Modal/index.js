import React, { useEffect } from "react";
import {Background, Container, BtnDiv, Title, Body, Footer, LiveLink, GitHubLink, Stack} from "./styles.js";

const ProjectModal = ({ setModalOpen, openModal, modalData }) => {

    const enableScroll = () => {
        window.location.href = "#projects";    
        document.body.style.overflowY = 'visible';
        document.querySelector("#nav").style.visibility = 'visible';            
            return;
        };

        useEffect(() => {
            if (openModal) {
                document.body.style.overflowY = 'hidden';
                document.querySelector("#nav").style.visibility = 'hidden';
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

          <LiveLink href={modalData.liveLink} target="_blank" rel="noopener noreferrer">Live</LiveLink>
          <GitHubLink href={modalData.gitLink} target="_blank" rel="noopener noreferrer">GitHub</GitHubLink>
          
        </Footer>
        <Stack>{modalData.tech}</Stack>
      </Container>
    </Background>
  );
}

export default ProjectModal;