import AnimatedText from "./AnimatedText";
import Intro from "./Intro";
import LinkBox from "./LinkBox";
import resume from "./resume.json";
import Summary from "./Summar";
import MyNavbar from "./MyNavbar";
import Skills from "./Skills";

function App() {
  const info = resume;
  return (
    <div className="App">
      <MyNavbar />
      <div className="content container">
        <section id="intro">
          <Intro text={info.name}>
            <AnimatedText text={info.job_description} />
            <LinkBox info={info} />
          </Intro>
        </section>
        <section id="summary">
          <Summary
            profilePicUrl={info.profile_pic_url}
            summary={info.summary}
          />
        </section>
        <section>
          <Skills
            languages={info.skills.languages}
            frameworks={info.skills.frameworks}
            libraries={info.skills.libraries}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
