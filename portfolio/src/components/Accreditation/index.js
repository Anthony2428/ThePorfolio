import React from "react";
import { PageWrapper, Container, Header, Certificates } from "./styles";

const Education = () => {
    
    return (
        <PageWrapper>
                <Container id="education" className="item" data-aos="fade-up" data-aos-anchor="#trigger-footer" data-aos-anchor-placement="top-right">
                    <Header>Education</Header>
                    <Certificates>
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="a8266f47-b257-45d9-a63a-d4f8f3ce7a32" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>    
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="4b1d7952-833a-49a7-8da5-38a27bb1a755" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                    </Certificates>                
            </Container>
        </PageWrapper>
)
};
export default Education;