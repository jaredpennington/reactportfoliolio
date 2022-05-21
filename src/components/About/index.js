import React from "react";
import "./index.css";
import condo from "../../assets/condo.jpg";
import water from "../../assets/water.jpg";
import van from "../../assets/van.JPG";


function About() {
  return (
    <div className="container mx-auto mt-6 ">
    
      <h1 className="text-4xl	">Nice to meet you! 
      <h3 className="text-xs	">(unofficially)</h3></h1>
      <div id="about-me-desc">
    <p className="text-left">
      write about yourself in a good way and maybe use a selfie too? hmmmmmm. creating padding where the br tags are. figure out how to change the sizes of the flippers. also maybe only do like 4 flippers. </p>
      <img src="https://images.pixieset.com/98880664/46c2be787cbb76cdf94e33127be2551e-medium.jpg"></img>
    </div>




    <hr></hr>
    
      <h4 className="text-2xl ">Preferences</h4>
      <div className="align-bottom cards-at-the-bottom">
      <div className="flip">
        <div className="front"
         style={{
            backgroundImage:
              `url(${condo})`,
          }}>
          <h1 className="text-shadow">condo</h1>
        </div>
        <div className="back">
          <h1>mooon</h1>
          <p>this is da mon</p>
        </div>
      </div>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage:
              `url(${water})`,
          }}
        >
         
          <h1 className="text-shadow">OCEAN</h1>
        </div>
        <div className="back">
          <h2>Angular</h2>
          <p>
            Good tools make application development quicker and easier to
            maintain than if you did everyth1ng by hand..
          </p>
        </div>
      </div>

      <h4 className="text-2xl "></h4>
      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage:
              `url(${van})`,
          }}
        >
          
          <h1 className="text-shadow">TRACK</h1>
        </div>
        <div className="back">
          <h2>Angular</h2>
          <p>
            Good tools make application development quicker and easier to
            maintain than if you did everyth1ng by hand..
          </p>
        </div>
      </div>
      
        
      
    </div>
    </div>
  );
}

export default About;
