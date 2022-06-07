import React, { useState } from "react";
import ProjectModal from "../Modal";
import {Repository, CurrentProject} from "../Repositories";
import { PageWrapper, Header, ProjectsDiv } from "./styles";

const Projects = () => {

    const [openModal, setModalOpen] = useState();
    const [modalData, setModalData] = useState(false);
    

    return (
            <PageWrapper>
                    <ProjectsDiv id="projects">
                        <Header className="item" data-aos="fade-down" data-aos-anchor="#trigger-project">Projects</Header>
                        <Repository setModalData={setModalData} setModalOpen={setModalOpen} />
                        <Header className="item" data-aos="fade-down" data-aos-anchor="#trigger-Cproject">Current Projects</Header>
                        <CurrentProject setModalData={setModalData} setModalOpen={setModalOpen} />

                    </ProjectsDiv>
                    {openModal && <ProjectModal modalData={modalData} setModalOpen={setModalOpen} openModal={openModal} />}
            </PageWrapper>
)
};
export default Projects;