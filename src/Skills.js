import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faAws } from "@fortawesome/free-brands-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

export default function Skills({
  languages,
  frameworks,
  libraries,
  certification,
}) {
  console.log("here");
  console.log(frameworks);
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills">
        <div className="skills-section">
          <h4>
            Languages:
            <FontAwesomeIcon icon={faPython} className="skill-icon" />
          </h4>
          <ul>
            {languages.map((language) => (
              <li key={language.name}> {language.name}</li>
            ))}
          </ul>
        </div>
        <div className="skills-section">
          <h4>
            Frameworks:
            <FontAwesomeIcon icon={faCubes} className="skill-icon" />
          </h4>
          <ul>
            {frameworks.map((framework) => (
              <li key={framework}> {framework}</li>
            ))}
          </ul>
        </div>
        <div className="skills-section">
          <h4>
            Libraries: <FontAwesomeIcon icon={faReact} className="skill-icon" />
          </h4>
          <ul>
            {libraries.map((library) => (
              <li key={library}>{library}</li>
            ))}
          </ul>
        </div>
        <div className="skills-section">
          <h4>
            Certification:
            <FontAwesomeIcon icon={faAws} className="skill-icon" />
          </h4>
          <ul>
            {certification.map((certificate) => (
              <li key={certificate}>{certificate}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
