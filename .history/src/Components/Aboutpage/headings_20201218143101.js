import React from "react";
import "./About.css";

export default function headings(props) {
  return (
    <div className="position-relative">
      <img
        src="image7.jpg"
        alt="Profile Pics"
        className="Topheading_css "
      />
      <h1 className="  ">{props.title} </h1>
    </div>
  );
}
