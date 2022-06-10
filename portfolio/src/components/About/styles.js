import styled from 'styled-components'

export const PageWrapper = styled.div`
    justify-content: right;
    text-align: right;
    align-items: right;
    margin: auto;
    height: max-content;
    background-color: #fff;
    width: 100vw;
    position: relative;
`;

export const Container = styled.div`
    padding: 35px 35px;
    text-align: right;
    line-height: 55px; 
    position: relative;
`;

export const Header = styled.h1`
    font-family: 'Permanent Marker',cursive;
    font-size: 52px;
    padding: 10px;
    color: #374785;
    position: relative;
    top: 5%;
`;

export const Context = styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 28px;
    color: #374785;
    height: auto;
    text-align: right;
    line-height: 4.25rem;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        text-align: center;
    }
`;