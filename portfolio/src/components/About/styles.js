import styled from 'styled-components'

export const PageWrapper = styled.div`
    background-color: #fff;
    width: 100vw;
    position: relative;
    height: 100vh;

    @media screen and (max-width: 768px) {
        height: max-content;
    }
`;

export const Container = styled.div`
    padding: 10px 35px 0 35px !important;
    width: 50%;
    text-align: right;
    line-height: 55px; 
    position: absolute;
    right: 7%;
    top: 2%;
    
    @media screen and (max-width: 768px) {
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
    font-size: 32px;
    color: #374785;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }
`;
export const TechStack = styled.div`
    width: 50%;
    height: 100%;
`;

export const DownScroll = styled.a`
    font-family: 'Permanent Marker',cursive;
    font-size: 24px;
    color: #F8E9A1;
`;