import React, { useState } from "react";
import AnimatedText from "./AnimatedText";
import Intro from "./Intro";
import LinkBox from "./LinkBox";
import resume from "./resume.json";
import Summary from "./Summary";
import Skills from "./Skills";
import EducationAndWork from "./EducationAndWork";
import Projects from "./Projects";
import ProjectBox from "./ProjectBox";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Important for accessibility

function App() {
  const info = resume;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="App">
      <div className="content container">
        <Intro text={info.name}>
          <AnimatedText text={info.job_description} />
          <LinkBox info={info} />
        </Intro>
        <Summary profilePicUrl={info.profile_pic_url} summary={info.summary} />

        <Skills
          languages={info.skills.languages}
          frameworks={info.skills.frameworks}
          libraries={info.skills.libraries}
          certification={info.skills.certificates}
        />

        <EducationAndWork education_and_work={info.education_and_work} />
        <Projects
          projects={info.projects}
          setSelectedProject={setSelectedProject}
        />
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onRequestClose={() => setSelectedProject(null)}
        contentLabel="Project Details"
        className="Modal"
        overlayClassName="Overlay"
      >
        {selectedProject && (
          <ProjectBox
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </Modal>
    </div>
  );
}

export default App;
