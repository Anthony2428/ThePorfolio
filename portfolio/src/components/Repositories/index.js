import React from "react";
import ThePortfolio from "./screenshots/ThePortfolio.png";
import ForecastDashboard from "./screenshots/ForecastDashboard.png";
import Sportsbox from "./screenshots/Sportsbox.png";
import PasswordGen from "./screenshots/PasswordGen.png";
import NoteTaker from "./screenshots/NoteTaker.png";
import HWY2Fusion from "./screenshots/HWY2Fusion.png";
import { ProjectCard, ProjectTitleB, ProjectsRow } from "./styles";

export const Repository = ({setModalOpen, setModalData}) => {
    const repos = [
        {
            name: "SportsBox Sports",
            description: "Sports Hub that delivers your favorite Sport's News and Team Data. Hosted on Heroku.",
            tech: '[React, React Hooks, MySQL + Sequelize, CSS, Javascript, Express.js - Backend + Routing, 3rd Party API Fetches/Calls, Axios, Sportdata API]',
            gitLink: "https://github.com/Anthony2428/Sportsbox-v2",
            liveLink: "https://sportsbox-sports.herokuapp.com/",
            image: Sportsbox
        },
        {
            name: "Forecast Dashboard",
            description: "Connects to Weather API to present user with a city's 5-day Forecast. Hosted on Github Pages.",
            tech: '[HTML, CSS, Javascript, 3rd Party API Fetches, Google Maps APIs, Google Autocomplete Places API, OpenWeather API]',
            gitLink: "https://github.com/Anthony2428/Forecast-Dashboard",
            liveLink: "https://anthony2428.github.io/Forecast-Dashboard/",
            image: ForecastDashboard
        },
        {
            name: "Password Generator",
            description: "Generates passwords based on user criteria.",
            tech: '[HTML, CSS, Javascript]',
            gitLink: "https://github.com/Anthony2428/Ant-s-Password-Generator",
            liveLink: "https://anthony2428.github.io/Ant-s-Password-Generator",
            image: PasswordGen
        },
        {
            name: "Note Taker",
            description: "Frontend tools with an express backend, allowing user to save and/or delete user notes in a json file. Hosted on Heroku.",
            tech: '[HTML, CSS, Javascript, Express.js - Backend + Routing]',
            gitLink: "https://github.com/Anthony2428/Note-Taker",
            image: NoteTaker,
            liveLink: "https://radiant-tor-11613.herokuapp.com/",
        },
        {
            name: "The Portfolio",
            description: "My Portfolio built in React, hosted using Amazon S3, Amazon Cloudfront, and Amazon Route 53.",
            tech: '[React, AWS S3, AWS Cloudfront, AWS Route 53]',
            gitLink: "https://github.com/Anthony2428/ThePorfolio",
            liveLink: "https://www.dev-anthonylopez.com/",
            image: ThePortfolio,
        },
]

    const allJsx = repos.map(repo => {
        return(
            <ProjectCard onClick={(e) => {e.preventDefault(); setModalData(repo); setModalOpen(true);}}>
                <img style={{padding: "10px"}} src={repo.image} alt=""/>
                <ProjectTitleB>
                    {repo.name}
                </ProjectTitleB>
            </ProjectCard>
        );
    })
    return (
        <>
            <ProjectsRow id="trigger-project">
                {allJsx[0]}
                {allJsx[1]}
            </ProjectsRow>

            <ProjectsRow>
                {allJsx[2]}
                {allJsx[3]}
            </ProjectsRow>
            <ProjectsRow>
                {allJsx[4]}
            </ProjectsRow>
        </>
    )
};
export const CurrentProject = ({setModalOpen, setModalData}) => {
    const repos = [
        {
            name: "HWY 2 Diner",
            description: "React website for a Diner located in Monroe, WA. Hosted using AWS Services.",
            tech: '[React, CSS, Javascript, AWS S3, AWS Cloudfront, AWS Route 53]',
            gitLink: "https://github.com/Anthony2428/HWY-2-Fusion",
            liveLink: "https://github.com/Anthony2428/HWY-2-Fusion",
            image: HWY2Fusion
        },
]

    const allJsx = repos.map(repo => {
        return(
            <ProjectCard id="trigger-footer" onClick={(e) => {e.preventDefault(); setModalData(repo); setModalOpen(true);}}>
                <img style={{padding: "10px"}} src={repo.image} alt=""/>
                <ProjectTitleB>
                    {repo.name}
                </ProjectTitleB>
            </ProjectCard>
        );
    })
    return (
        <>
            <ProjectsRow id="trigger-Cproject">
                {allJsx}
            </ProjectsRow>
        </>
    )
};
