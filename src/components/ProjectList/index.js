import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import beach from '../../assets/beach.jpg'
import otherbeach from '../../assets/otherbeach.jpg'
import burntout from '../../assets/burntout.jpg'

function ProjectList() {
     
        return (
            <Carousel>
                <div>
                    <img src={beach} alt="put a project dec here"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={burntout} alt="put a project dec here"/>
                    <p className="legend">burnt out mother fucker</p>
                </div>
                <div>
                    <img src={otherbeach} alt="put a project dec here"/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={otherbeach} alt="put a project dec here"/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={otherbeach} alt="put a project dec here"/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={otherbeach} alt="put a project dec here"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    
};

export default ProjectList;