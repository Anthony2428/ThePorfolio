import React from "react";
import { ScrollSpan, UpScroll, FooterDiv, GithubIcon, LinkedInIcon, ResumeIcon, MailIcon, Footnote, IconDiv } from './styles';
import Resume from "./assets/Resume.docx"


const Footer = () => {

  return (
    <FooterDiv id="trigger-footer">
      <ScrollSpan id="trigger-ffooter"><UpScroll href="#home">Scroll Up</UpScroll></ScrollSpan>
      <IconDiv className="item" data-aos="fade-up" data-aos-anchor="#trigger-footer">
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
        <Footnote className="item" data-aos="fade-up" data-aos-anchor="#trigger-ffooter">
          Anthony Lopez - Full Stack Web Developer
          </Footnote>
    </FooterDiv>

  );
}

export default Footer;