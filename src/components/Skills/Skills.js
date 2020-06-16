import React from "react";
import Divider from "../Divider/Divider";
import TechButtons from "../TechButtons/TechButtons";

const Skills = () => {
  const skills = [
    "React",
    "React Native",
    "React Hooks",
    "Redux",
    "Angular",
    "Typescript",
    "Context API",
    "Axios",
    "Expo CLI",
    "JavaScript",
    "ECMAScript 6+",
    "JSX",
    "Firebase",
    "jQuery",
    "JSON",
    "Node.js",
    "Express",
    "HTML5",
    "CSS3",
    "Bootstrap 4",
    "SCSS",
    "REST API",
    "Git",
    "Github",
    "Python 3",
    "Web Scraping",
    "Local Storage",
  ];

  return (
    <>
      <div className="anchor" id="skills" />
      <section className="page-section bg-primary text-white mb-0">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Skills
          </h2>
          <Divider light />
          <TechButtons tech={skills} />
        </div>
      </section>
    </>
  );
};

export default Skills;
