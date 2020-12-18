import React from "react";
import "./About.css";

export default function headings(props) {
  return (
    <div className="position-relative">
      <img
        src= {props.image}
        alt="Profile Pics"
        className="Topheading_css "
      />
      <h1 className="  title_text ">{props.title} </h1>
    </div>
  );
}
