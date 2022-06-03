import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import cocktailparty from "../../assets/cocktailparty.png";
import photoport from "../../assets/photoport.png";
import ecommerce from "../../assets/ecommerce.png";
import crono from "../../assets/crono.png";
import planit from "../../assets/planit.png";
import notetaker from "../../assets/notetaker.png";

function ProjectList() {
  const projects = [
    {
      title: "cocktail Party",
      description:
        "An app where you go search, review and share cocktail recipes. When you sign up you can post a photo and a recipe to share with others. You can also search your liquor of choice or by ingredient.​",
      github: "https://github.com/jaredpennington/cocktailParty",
      deployed: "https://cocktail-party-jp-ac.herokuapp.com/",
    },
    {
      title: "Photo-port",
      description: "a photography portfolio developed with react.",
      github: "https://github.com/jaredpennington/photo-port",
      deployed: "https://jaredpennington.github.io/photo-port/",
    },
    {
      title: "E-commerce back end",
      description:
        "The back end code of an e-commerce website utilizing object-relational-mapping.",
      github: "https://github.com/jaredpennington/E-commerceBackEnd",
      deployed: "",
    },
    {
      title: "Crono",
      description: "The back end of a social media application utilizing API's",
      github: "https://github.com/jaredpennington/crono",
      deployed: "",
    },
    {
      title: "Plan It",
      description:
        "A group project for organizing your life. Built with graphQL, React, and an extensive front end and back end.",
      github: "https://github.com/jaredpennington/Plan-It-Organizer",
      deployed: "https://plan-it-organizer.herokuapp.com/",
    },
    {
      title: "Note Taker",
      description:
        "you write notes and you save it. You can also click on notes to access the note you wrote.",
      github: "https://github.com/jaredpennington/notetaker",
      deployed: "https://jaredsnotes.herokuapp.com/notes",
    },
  ];

  return (
    <Carousel>
      <div className="carousel-style">
        <img src={planit} alt="put a project dec here" />
        <div className="legend ">
          <h1>{projects[4].title}</h1>
          <div className="">
            <p>{projects[4].description}</p>
          </div>
          <div className="flex links justify-center">
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="deployed-github justify-center">
                <a href={projects[4].github}>Github</a>
                <a href={projects[4].deployed}>Deployed</a>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-style">
        <img src={cocktailparty} alt="put a project dec here" />
        <div className="legend ">
          <h1>{projects[0].title}</h1>
          <div className="">
            <p>{projects[0].description}</p>
          </div>
          <div className="flex links justify-center">
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="deployed-github justify-center">
                <a href={projects[0].github}>Github</a>
                <a href={projects[0].deployed}>Deployed</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-style">
        <img src={crono} alt="put a project dec here" />
        <div className="legend ">
          <h1>{projects[3].title}</h1>
          <div className="">
            <p>{projects[3].description}</p>
          </div>
          <div className="flex links justify-center">
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="deployed-github justify-center">
                <a href={projects[3].github}>Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-style">
        <img src={ecommerce} alt="put a project dec here" />
        <div className="legend ">
          <h1>{projects[2].title}</h1>
          <div className="">
            <p>{projects[2].description}</p>
          </div>
          <div className="flex links justify-center">
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="deployed-github justify-center">
                <a href={projects[2].github}>Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-style">
        <img src={photoport} alt="put a project dec here" />
        <div className="legend ">
          <h1>{projects[1].title}</h1>
          <div className="">
            <p>{projects[1].description}</p>
          </div>
          <div className="flex links justify-center">
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="deployed-github justify-center">
                <a href={projects[1].github}>Github</a>
                <a href={projects[1].deployed}>Deployed</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-style">
        <img src={notetaker} alt="put a project dec here" />
        <div className="legend ">
          <h1>{projects[5].title}</h1>
          <div className="">
            <p>{projects[5].description}</p>
          </div>
          <div className="flex links justify-center">
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="deployed-github justify-center">
                <a href={projects[5].github}>Github</a>
                <a href={projects[5].deployed}>Deployed</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default ProjectList;
