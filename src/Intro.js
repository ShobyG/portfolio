export default function Intro({ text, children }) {
  return (
    <div className="intro">
      <h1>{text}</h1>
      {children}
    </div>
  );
}
