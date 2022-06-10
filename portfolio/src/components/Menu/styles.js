import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 5;
`;
  
export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #374785;
    flex-direction: column;
    padding: 25px;
    transition: all .4s;
    position: relative;
    margin: auto;

    @media screen and (max-width: 525px) {
        width: 90vw;
    }
`

export const BtnDiv = styled.div`
    display: flex;
    justify-content: flex-end;

  
  > button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
`;

export const Link = styled.a`
    font-family: 'Permanent Marker',cursive;
    font-size: 48px;
    float: right;
    color: #fff;
    padding-right: 50px;

    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        color: #F8E9A1;
        text-decoration: none;
    }
`;

export const Body = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.8rem;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    flex-direction: column;
    height: 100%;
`;