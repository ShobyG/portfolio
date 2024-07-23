import AnimatedText from "./AnimatedText";
import Intro from "./Intro";
import LinkBox from "./LinkBox";
import resume from "./resume.json";

function App() {
  const info = resume;
  return (
    <div className="App">
      <Intro text={info.name}>
        <AnimatedText text={info.job_description} />
        <LinkBox info={info} />
      </Intro>
    </div>
  );
}

export default App;
