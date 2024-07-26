import React from "react";

export default function ProjectBox({ selectedProject, setSelectedProject }) {
  function handleClose() {
    setSelectedProject(null);
  }

  return (
    <div className="selectedProject">
      <button onClick={handleClose} className="close-button">
        Close
      </button>
      <h3>
        Project Name: {selectedProject.name} ({selectedProject.time})
      </h3>
      <img src={selectedProject.image_url} alt="Shoby Gnanasekaran's project" />
      <h4> Built Using:</h4>
      <ul>
        {selectedProject.Technologies.map((tech) => (
          <li key={tech} className="tech">
            {tech}
          </li>
        ))}
      </ul>
      <h4>Project Description</h4>
      <ul>
        {selectedProject.Description.map((desc) => (
          <li key={desc} className="tech">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}
