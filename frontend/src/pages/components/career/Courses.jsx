import React from "react";
import Domain from "./course/Domain";
import Skill from "./course/Skill";
import "./Courses.css";

const Courses = (props) => {
  return (
    <div className="coursesContainer">
      <Domain domains={props.courses.DomainWiseReccomendations} />
      <Skill skills={props.courses.RecomendedSkills} />
    </div>
  );
};

export default Courses;
