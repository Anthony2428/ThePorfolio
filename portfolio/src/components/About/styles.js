import styled from 'styled-components'

export const PageWrapper = styled.div`
    background-color: #fff;
    width: 100vw;
    position: relative;
    height: 450px;

    @media screen and (max-width: 1200px) {
        height: max-content;
    }
`;

export const Container = styled.div`
    padding: 10px 35px;
    width: 55vw;
    text-align: right;
    line-height: 55px; 
    position: absolute;
    right: 7%;
    top: 2%;
    display: flex;

    @media screen and (max-width: 2110px) {
        width: 85vw;
    }

    @media screen and (max-width: 1200px) {
        margin-left: -15px;
        line-height: 45px; 
        text-align: center;
        margin: auto;
        position: static;
        width: 100vw;
    }
`;

export const Context = styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 28px;
    color: #374785;
    height: auto;
    text-align: right;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        text-align: center;
    }
`;