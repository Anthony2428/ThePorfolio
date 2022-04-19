import styled from 'styled-components'

export const PageWrapper = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: auto;
    background-color: #374785;
    width: 100vw;
    position: relative;
    height: 100vh;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`;
export const Context = styled.div`
    width: 50%;
    float: left;
    height: 100%;
`;
export const TechStack = styled.div`
    width: 50%;
    height: 100%;
`;
export const ScrollSpan = styled.div`
    font-family: 'Permanent Marker',cursive;
    font-size: 24px;
    color: #F8E9A1;
    padding-right: 50px;
    position: relative;
    background: linear-gradient(to right, #F8E9A1 20%, #374785 30%, #F8E9A1 90%);
    background-size: 200% auto;
    
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    animation: shine 3s linear infinite;
    @keyframes shine {
        to {
        background-position: 200% center;
        }
    }
        @keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.1);}
    100% {transform: scale(1);}
    }
    animation-name: pulse, shine;
    animation-duration: 1s;

`;

export const DownScroll = styled.a`
    font-family: 'Permanent Marker',cursive;
    font-size: 24px;
    color: #F8E9A1;
`;