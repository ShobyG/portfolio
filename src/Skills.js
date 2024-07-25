import React from "react";

export default function Skills({
  languages,
  frameworks,
  libraries,
  certification,
}) {
  console.log("here");
  console.log(frameworks);
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-section">
        <h3>Languages: </h3>
        <ul>
          {languages.map((language) => (
            <li key={language.name}> {language.name}</li>
          ))}
        </ul>
      </div>
      <div className="skills-section">
        <h3>Frameworks: </h3>
        <ul>
          {frameworks.map((framework) => (
            <li key={framework}> {framework}</li>
          ))}
        </ul>
      </div>
      <div className="skills-section">
        <h3>Libraries:</h3>
        <ul>
          {libraries.map((library) => (
            <li key={library}>{library}</li>
          ))}
        </ul>
      </div>
      <div className="skills-section">
        <h3>Certification:</h3>
        <ul>
          {certification.map((certificate) => (
            <li key={certificate}>{certificate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
