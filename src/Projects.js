export default function Projects({ projects, setSelectedProject }) {
  function openProject(project) {
    setSelectedProject(project);
  }

  return (
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
  );
}
