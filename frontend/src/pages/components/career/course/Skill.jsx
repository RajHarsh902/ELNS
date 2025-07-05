import React from "react";
import "./Skill.css";

const Skill = ({ skills = {} }) => { // Ensure `skills` is always an object
  if (!skills || Object.keys(skills).length === 0) {
    return <p className="noData">No skills available</p>; // Handle empty state
  }

  return (
    <div className="skillContainer">
      <h2 className="skillTitle">Recommended Skills</h2>
      <div className="skillGrid">
        {Object.entries(skills).map(([category, skillList]) => (
          <div className="skillCategory" key={category}>
            <h3>{category.replace(/([A-Z])/g, " $1")}</h3>
            <ul>
              {Array.isArray(skillList) && skillList.length > 0 ? (
                skillList.map((skill, index) => (
                  <li key={index}>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      <strong>{skill.name}</strong>
                    </a>
                    <p>{skill.info}</p>
                  </li>
                ))
              ) : (
                <p className="noSkills">No skills listed.</p>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
