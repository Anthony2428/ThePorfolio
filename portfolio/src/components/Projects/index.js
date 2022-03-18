import React from "react";
import Repository from "../Repositories";

const Projects = () => {
    
    return (
        
    <div className="mb-6 columns is-multiline is-centered">
        <div className="column is-12 is-7-fullhd is-8-desktop has-text-centered">
            <h2 className="mt-2 mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">Anthony Lopez</h2>
            <p className="subtitle has-text-grey has-text-primary">Passionate Web Developer</p>
        </div>
        <div className="columns is-multiline">
            <Repository />
        </div>
    </div>
)
};
export default Projects;