import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function LinkBox({ info }) {
  return (
    <div className="link-box">
      <a
        href={info.linkedIn_url}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      <a
        href={info.gitHub_url}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <a
        href={info.resume_url}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <FontAwesomeIcon icon={faFile} className="icon" />
      </a>
    </div>
  );
}
