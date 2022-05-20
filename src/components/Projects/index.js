import React from 'react';
import Resume from '../Resume/index.js';
import ProjectList from '../ProjectList/index.js';

function Projects({currentCategory}) {
    const {name } = currentCategory;

    return (
        <section>
           
        {name === 'resume' ? (
            <div>
            <Resume name={name}>
            </Resume>
            </div>
            
        ) : (
            <div>
            <ProjectList name={name}>
                
            </ProjectList>
            </div>
        )
    }
    </section>
    )
}

export default Projects;