import React from "react";
import "./index.css";
import chalkboard from "../../assets/chalkboard.JPG";
import flying from "../../assets/flying.jpg";
import burntout from "../../assets/burntout.jpg";

function About() {
  return (
    <div className="container mx-auto mt-6 ">
      <h1 className="text-4xl	">
        Nice to meet you!
        <h3 className="text-xs">(unofficially)</h3>
      </h1>
      <div id="about-me-desc">
        <img src="https://images.pixieset.com/98880664/46c2be787cbb76cdf94e33127be2551e-medium.jpg" className="" alt="the developer"></img>
        <div className="mt-6 mb-1">
          <p className="text-xl text-center sm:text-left">
            My name is Jared Pennington I am a photographer turned front end
            software developer/designer as of June 2022. I still shoot a lot
            espically on film and you'll notice that all the photos on this
            portfolio are my own! Playing video games, listening to music, and
            watching movies are among my other hobbies I thoroughly enjoy. I
            have a passion for creating and would love to explore the avenues of
            design in the tech industry.
          </p>
        </div>
      </div>

      <hr></hr>

      <h4 className="text-2xl mb-6">Preferences</h4>
      <div className="align-bottom cards-at-the-bottom">
        <div className="flip">
          <div
            className="front"
            style={{
              backgroundImage: `url(${chalkboard})`,
            }}
          >
            <h1 className="text-shadow">Music</h1>
          </div>
          <div className="back">
            <h1>Artists</h1>
            <p className="mt-2">Neck Deep, The Story so Far, Citizen, Modern Baseball, Hippo Campus, Pinegrove</p>
          </div>
        </div>
        <div className="flip">
          <div
            className="front"
            style={{
              backgroundImage: `url(${flying})`,
            }}
          >
            <h1 className="text-shadow">Entertainment</h1>
          </div>
          <div className="back">
            <h1>Movies & Shows</h1>
            <p className="mt-2">
              Fantastic Mr. Fox, Demon Slayer, Sleepless in Seattle, Arrival, One Punch Man, Demolition, Love Death & Robots
            </p>
          </div>
        </div>

        <h4 className="text-2xl "></h4>
        <div className="flip flip-vertical">
          <div
            className="front "
            style={{
              backgroundImage: `url(${burntout})`,
            }}
          >
            <h1 className="text-shadow">Miscellaneous</h1>
          </div>
          <div className="back">
            <h1>Anything and Everything</h1>
            <p className="mt-2 smaller-text">
              Rasberry tea, staying up way too late, night time bike explorations, the art of good architecture, pesto pasta (or any pasta really), american traditional tattoos, dogs over cats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
