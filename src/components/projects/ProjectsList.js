import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectsList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <Link to={'/project/'+ project.id} key={project.id}>
                        <ProjectSummary project={project} key={project.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectsList;
