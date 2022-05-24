import styled from "styled-components";

export const ProjectTitleB = styled.p`
    width: 100%;
    background-image: linear-gradient(#5b5a5a, #000);
    text-align: center;
    position: absolute;
    bottom: 0;
    visibility: hidden;
    opacity:0;
    transition: opacity 0.3s linear;
    height: 15%;
    margin: auto;
    color: #fff;
    padding: 4px;
`;

export const ProjectCard = styled.div`
    width: 500px;
    background-color: #fff;
    border-radius: 20%;
    border: 2px solid black;
    height: 200px;
    margin: 30px;
    position: relative;
    overflow: hidden;
    
    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        border: 2.5px solid #F8E9A1;
        cursor: pointer;
    }

    &:hover > p {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            visibility: visible;
            opacity: 1;
    }
    @media screen and (max-width: 1240px) {
        width: 80vw;
    }
`;
export const ProjectsRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;