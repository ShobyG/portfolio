import React from "react";

export default function Summary({ profilePicUrl, summary }) {
  return (
    <div id="summary" className="summary-details">
      <img
        src={profilePicUrl}
        alt="Shoby Gnanasekaran"
        className="summary-image"
      />
      <div className="summary-text">{summary}</div>
    </div>
  );
}
