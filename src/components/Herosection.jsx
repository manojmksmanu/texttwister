import React, { useState } from "react";
import { useEffect } from "react";
import Summary from "./Summary";

const Herosection = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("hello");
  });

  function uppercase() {
    let text = data;
    console.log(text);
    setData(text.toUpperCase());
  }

  function lowercase() {
    let text = data;
    console.log(text);
    setData(text.toLowerCase());
  }

  function clear() {
    let text = data;
    console.log(text);
    setData(" ");
  }
  // function countWords(str) {
  //     return str.trim().split(/\s+/).length;
  //   }

//   function allspaces() {
//     setData(
//       data.split(" ").filter((e) => {
//         return e.trim();
//       }).concat
//     );
//   }
function removeExtra(){
setData(data.replace(/ +/g,' ' ))

}
function allspaces(){
setData(data.replace(/ +/g,'' ))

}
  return (
    <>
      <div className="hero">
        <label htmlFor="highlight"> Enter Your Text Here</label>
        <textarea
          name=""
          id="highlight"
          cols="30"
          rows="10"
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        ></textarea>
        <div className="btnsection">
          <button onClick={uppercase}>To Upper Case</button>
          <button onClick={lowercase}>To Upper Case</button>
          <button onClick={clear}>Clear Text</button>
          <button onClick={removeExtra}>Remove Extra Spaces</button>
          <button onClick={allspaces}>Remove All Spcaes</button>
        </div>
      </div>

      <Summary
        words={
          data.split(" ").filter((element) => {
            return element.length !== 0;
          }).length
        }
        lengthcharacter={data.length - data.split(" ").length + 1}
        summary={data}
      />
    </>
  );
};

// by default props
//prop types🐈

export default Herosection;
