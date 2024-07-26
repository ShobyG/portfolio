export default function Projects({ projects, setSelectedProject }) {
  function openProject(project) {
    setSelectedProject(project);
  }

  return (
    <div className="education-work-container">
      <h2 className="summary-title"> Recent Projects </h2>
      <div className="collage-container">
        {projects.map((project) => (
          <div
            className="collage-item"
            onClick={() => openProject(project)}
            key={project.name}
          >
            <img
              src={`${process.env.PUBLIC_URL}/${project.image_url}`}
              alt="Shoby Gnanasekaran's project"
            />
            <h5> {project.name} </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
