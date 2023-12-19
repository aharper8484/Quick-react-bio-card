import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import profileImg from "./profileSketch.png";

const skills = [
  { skill: "JavaScript", level: "Mid", color: "#9DC462" },
  { skill: "HTML", level: "Senior", color: "#509F65" },
  { skill: "CSS", level: "Senior", color: "#509F65" },
  { skill: "PHP", level: "Junior", color: "#CCD269" },
  { skill: "SQL", level: "Junior", color: "#CCD269" },
  { skill: "React", level: "Junior", color: "#CCD269" },
];
console.log(skills);

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src={profileImg} alt="profile" />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Adam Harper</h1>
      <p>
        Yorkshire based developer with a background in International Trade.
        Originally from West Midlands. I come complete with accent.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          icon={skill.level}
          bgColor={skill.color}
          key={skill.skill}
        />
      ))}
    </div>
  );
}
function Skill({ skill, icon, bgColor }) {
  return (
    <div className="skill" style={{ backgroundColor: bgColor }}>
      <span>{skill}</span>
      {icon === "Junior" ? (
        <span>"🥲"</span>
      ) : icon === "Mid" ? (
        <span>"🤓"</span>
      ) : (
        <span>"😎"</span>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
