export default function Intro({ text, children }) {
  return (
    <div id="intro" className="intro">
      <h1>{text}</h1>
      {children}
    </div>
  );
}
