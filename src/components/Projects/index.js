import React from 'react';
import Resume from '../Resume/index.js';
import ProjectList from '../ProjectList/index.js';

function Projects({currentCategory}) {
    const {name } = currentCategory;

    return (
        <section>
            <h1>howdy lmao.</h1>
            <h4>poopidy doopidy.</h4>
            <p>add flippers here too??? maybe not actually idk. SOMETHING that can show off the screenshot of the project in a creative and interesting way. As well as linking it to the project directly.</p>
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