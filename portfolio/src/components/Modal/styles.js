import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
`;
  
export const Container = styled.div`
    width: 500px;
    height: 75vh;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgb(0 129 252 / 35%) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    transition: all .4s;

    @media screen and (max-width: 525px) {
        width: 90vw;
    }
`
  
export const Title = styled.div` 
    display: grid ;
    text-align: right;
    margin-top: 10px;
    border: 4px solid;
  	border-image: linear-gradient(to left, cornflowerblue, skyblue) 0 0 1 0;
    font-size: 1.8rem;
    font-family: 'Nunito', sans-serif;
`;
  
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

export const Body = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
`;

export const Stack = styled.div`
    bottom: 0;
    position: relative;
    justify-content: center;
    align-items: center;

    > a {
        width: 150px;
        margin: 5px;
  }
`;
  
export const Footer = styled.div`
    flex: 20%;
    display: flex;
    justify-content: right;
    align-items: center;

    > a {
        width: 150px;
        margin: 5px;
  }
`;

export const LiveLink = styled.a`
  background: #b62e2a;
  border: 1px solid #b62e2a;
  border-radius: 6px;
  box-shadow: #b62e2a 0px 5px 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;


&:hover,
&:active {
  background-color: initial;
  background-position: 0 0;
  color: #b62e2a;
}

&:active {
  opacity: .5;
}
`;

export const GitHubLink = styled.a`
  background: #2da44e;
  border: 1px solid #2da44e;
  border-radius: 6px;
  box-shadow: #2da44e 0px 5px 15px;
  box-sizing: border-box;
  color: #181717;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;


&:hover,
&:active {
  background-color: initial;
  background-position: 0 0;
  color: #181717;
}

&:active {
  opacity: .5;
}
`