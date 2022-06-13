import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { HiDocumentDownload } from 'react-icons/hi';

export const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    padding: 20px;
`;

export const LinkedInIcon = styled(FaLinkedin)`
    color: #fff;
    font-size: 3.8rem;
    margin: 20px;
    cursor: pointer;

    &:hover {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            color: #F8E9A1;
            text-decoration: none;
            font-weight: bold;
        }
`;

export const GithubIcon = styled(FaGithub)`
    color: #fff;
    font-size: 3.8rem;
    margin: 20px;
    cursor: pointer;

    &:hover {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            color: #F8E9A1;
            text-decoration: none;
            font-weight: bold;
        }
`;

export const MailIcon = styled(GrMail)`
    color: #fff;
    font-size: 3.8rem;
    margin: 20px;
    cursor: pointer;

    &:hover {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            color: #F8E9A1;
            text-decoration: none;
            font-weight: bold;
        }
`;

export const ResumeIcon = styled(HiDocumentDownload)`
    color: #fff;
    font-size: 3.8rem;
    margin: 20px;
    cursor: pointer;

    &:hover {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            color: #F8E9A1;
            text-decoration: none;
            font-weight: bold;
        }
`;