import React from "react";
import { Wrapper, SidebarDiv, GithubIcon, LinkedInIcon, ResumeIcon, MailIcon, IconDiv, IconCaption } from './styles';
import Resume from "./assets/Resume.docx"


const SideBar = () => {

  return (
      <Wrapper>
        <SidebarDiv />
        <IconDiv>
            <a href="https://www.linkedin.com/in/anthony-lopez-6b356218a/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            </a>
            <a href="https://github.com/Anthony2428" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            </a>
            <a href={Resume} download target="_blank" rel="noopener noreferrer">
                <ResumeIcon />
            </a>
            <a href="mailto: alopez0218.al@gmail.com" target="_blank" rel="noopener noreferrer">
                <MailIcon />
            </a>
        </IconDiv>
      </Wrapper>

  );
}

export default SideBar;