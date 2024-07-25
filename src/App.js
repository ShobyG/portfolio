import AnimatedText from "./AnimatedText";
import Intro from "./Intro";
import LinkBox from "./LinkBox";
import resume from "./resume.json";
import Summary from "./Summar";
import Skills from "./Skills";
import Education from "./Education";
import EducationAndWork from "./EducationAndWork";

function App() {
  const info = resume;
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
      </div>
    </div>
  );
}

export default App;
