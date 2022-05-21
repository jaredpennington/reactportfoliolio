import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import beach from "../../assets/beach.jpg";

function ProjectList() {
  const projects = [
    {
      title: "cocktail Party 1",
      description:
        "a shit ton of text the ipsom shit looks ugly idc i dont like it ok you drinksdflvkjsdfnvoiuasdhfgoslkjdbodxifvbnskldjff696969696969696969696969696dfskjvbsdflkjbsdmn",
      github: "github.com",
      deployed: "deployed.com",
    },
    {
      title: "cocktail Party",
      description: "dummy desc 1",
      github: "github.com",
      deployed: "deployed.com",
    },
    {
      title: "cocktail Party",
      description: "dummy desc 1",
      github: "github.com",
      deployed: "deployed.com",
    },
    {
      title: "cocktail Party",
      description: "dummy desc 1",
      github: "github.com",
      deployed: "deployed.com",
    },
    {
      title: "cocktail Party",
      description: "dummy desc 1",
      github: "github.com",
      deployed: "deployed.com",
    },
    {
      title: "cocktail Party",
      description: "dummy desc 1",
      github: "github.com",
      deployed: "deployed.com",
    },
  ];

  return (
    <Carousel>
      <div>
        <img src={beach} alt="put a project dec here"/>
        <div className="legend ">
          <h1>{projects[0].title}</h1>
          <div className="">
            <p>{projects[0].description}</p>
          </div>
          <div className="flex links justify-center">
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="deployed-github justify-center">
                <a href={projects[0].github}>github</a>
                <a href={projects[0].deployed}>deployed</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default ProjectList;
