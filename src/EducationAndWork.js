import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function EducationAndWork({ education_and_work }) {
  return (
    <div className="education-work-container">
      <h2 className="summary-title">Education And Work Experience</h2>
      <VerticalTimeline>
        {education_and_work.map((item, index) => (
          <EduOrWorkComponent key={index} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

function EduOrWorkComponent({ item }) {
  const formattedDate = `${item.start_time} - ${item.end_time}`;
  if (item.type === "work") {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={formattedDate}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faBriefcase} className="icon" />}
      >
        <h4 className="vertical-timeline-element-title">{item.job_title}</h4>
        <h5 className="vertical-timeline-element-subtitle">
          {item.company_name}
        </h5>
      </VerticalTimelineElement>
    );
  }
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date={formattedDate}
      iconStyle={{ background: "rgb(193, 59, 59)", color: "#fff" }}
      icon={<FontAwesomeIcon icon={faGraduationCap} className="icon" />}
      style={{ fontFamily: "Quicksand, sans-serif" }}
    >
      <h4 className="vertical-timeline-element-title">{item.deg_name}</h4>
      <h5 className="vertical-timeline-element-subtitle">{item.school_name}</h5>
    </VerticalTimelineElement>
  );
}
