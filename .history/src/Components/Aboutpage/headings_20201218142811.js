import React from "react";
import "./About.css";

export default function headings(props) {
  return (
    <div className="position-relative">
      <img
        src="Pictures/backgroundsPic.jpg"
        alt="Profile Pics"
        className="Topheading_css position-relative"
      />
      <h1 className="  title_text  position-absolute">{props.title} </h1>
    </div>
  );
}
