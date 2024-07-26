import React from "react";

export default function Summary({ profilePicUrl, summary }) {
  return (
    <div className="summary-container">
      <h2 className="summary-title">About Me</h2>
      <div className="summary-details">
        <img
          src={`${process.env.PUBLIC_URL}/${profilePicUrl}`}
          alt="Shoby Gnanasekaran"
          className="summary-image"
        />
        <div className="summary-text">{summary}</div>
      </div>
    </div>
  );
}
