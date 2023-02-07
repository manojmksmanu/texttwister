import React from "react";

// {lengthcharacter,words,time,summary}
const Summary = (props) => {
  return (
    <div className="summary">
      <h1>Your Summary Is Here</h1>
      <div>
        <p>
          {props.words} words {props.lengthcharacter} Characters
        </p>
        <p>
          Time Required To Read This Text : {(props.words * 0.193).toFixed(2)}{" "}
          seconds
        </p>
      </div>
      <h1>Your Text</h1>
      <p className="text-summary">{props.summary}</p>
    </div>
  );
};

// TODO: Add Prop types
// ? nsldkjngls
// * gnlwegw
// ! gsndlkgnosg

export default Summary;
