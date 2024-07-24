import AnimatedText from "./AnimatedText";
import Intro from "./Intro";
import LinkBox from "./LinkBox";
import resume from "./resume.json";
import Summary from "./Summar";

function App() {
  const info = resume;
  return (
    <div className="App">
      <Intro text={info.name}>
        <AnimatedText text={info.job_description} />
        <LinkBox info={info} />
      </Intro>
      <Summary profilePicUrl={info.profile_pic_url} summary={info.summary} />
    </div>
  );
}

export default App;
