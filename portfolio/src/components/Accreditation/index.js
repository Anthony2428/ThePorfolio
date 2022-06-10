import React from "react";
import { PageWrapper, Container, Header, Certificates, Image } from "./styles";
import AWSCCP from "./images/AWSCCP.png";
import AWSSAA from "./images/AWSSAA.png";
import UWCert from "./images/UWCert.png";

const Education = () => {
    
    return (
        <PageWrapper id="education">
                <Container id="trigger-edu">
                    <Header className="item" data-aos="fade-right" data-aos-anchor="#trigger-edu">Education</Header>
                    <Certificates>
                        <Image src={AWSCCP} alt="" />
                        <Image src={UWCert} alt="" />
                        <Image src={AWSSAA} alt="" />
                    </Certificates>                
            </Container>
        </PageWrapper>
)
};
export default Education;