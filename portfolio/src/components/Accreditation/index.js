import React from "react";
import { PageWrapper, Container, Header, Certificates } from "./styles";
import AWSCCP from "./images/AWSCCP.png";
import AWSSAA from "./images/AWSSAA.png";
import UWCert from "./images/UWCert.png";

const Education = () => {
    
    return (
        <PageWrapper>
                <Container id="education" className="item">
                    <Header>Education</Header>
                    <Certificates>
                        <img src={AWSCCP} alt="" />
                        <img src={UWCert} alt="" />
                        <img src={AWSSAA} alt="" />
                    </Certificates>                
            </Container>
        </PageWrapper>
)
};
export default Education;