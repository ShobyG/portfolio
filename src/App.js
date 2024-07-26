import AnimatedText from "./AnimatedText";
import Intro from "./Intro";
import LinkBox from "./LinkBox";
import resume from "./resume.json";
import Summary from "./Summar";
import Skills from "./Skills";
import EducationAndWork from "./EducationAndWork";
import Projects from "./Projects";
import React, { useState } from "react";
import ProjectBox from "./ProjectBox";

function App() {
  const info = resume;
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="App">
      {selectedProject === null ? (
        <div className="content container">
          <Intro text={info.name}>
            <AnimatedText text={info.job_description} />
            <LinkBox info={info} />
          </Intro>
          <Summary
            profilePicUrl={info.profile_pic_url}
            summary={info.summary}
          />

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
      ) : (
        <ProjectBox
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </div>
  );
}

export default App;
