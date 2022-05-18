import React from "react";
import "./index.css";
import condo from "../../assets/condo.jpg";

function About() {
  return (
    <div>
      <h4>Preferences</h4>
      <div className="flip">
        <div className="front">
          <img src={condo}></img>
          <h1 className="text-shadow">condo</h1>
        </div>
        <div className="back">
          <h2>mooon</h2>
          <p>this is da mon</p>
        </div>
      </div>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
          }}
        >
          <h1 className="text-shadow">LAKE</h1>
        </div>
        <div className="back">
          <h2>Angular</h2>
          <p>
            Good tools make application development quicker and easier to
            maintain than if you did everyth1ng by hand..
          </p>
        </div>
      </div>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
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

      <h4>Vertical Flip</h4>
      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
          }}
        >
          <h1 className="text-shadow">FOREST</h1>
        </div>
        <div className="back">
          <h2>Angular</h2>
          <p>
            Good tools make application development quicker and easier to
            maintain than if you did everyth1ng by hand..
          </p>
        </div>
      </div>
      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
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
      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
          }}
        >
          <h1 className="text-shadow">SWAMP</h1>
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
  );
}

export default About;
