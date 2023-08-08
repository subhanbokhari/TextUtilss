import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("The Text Has been converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    console.log("LowerCase Was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("The Text Has been converted to LowerCase", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleItClick = () => {
    console.log("Italic was Pressed");
    setStyle({ ...style, fontStyle: 'italic' });
    props.showAlert("The Text Has been converted to Italic", "success");
  };

  const handleBclick = () => {
    console.log("Bold was Pressed");
    setStyle({ ...style, fontWeight: 'bold' });
    props.showAlert("The Text Has been converted to Bold", "success");
  };

  const handleClear = () => {
    console.log("Clear Clicked");
    setStyle({ fontWeight: 'normal', fontStyle: 'normal' });
    setText("");
    props.showAlert("Context Cleared", "success");
  };

  const [text, setText] = useState("Enter Text Here");
  const [style, setStyle] = useState({ fontStyle: "normal", fontWeight: 'normal' });

  return (
    <>
      <div className="Container" style={{ backgroundColor: props.mode === 'darkBlue' ? '#000055' : (props.mode === 'darkGrey' ? 'grey' : 'white'), color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1 style={{ color: props.mode === 'darkGrey' ? 'black' : (props.mode === 'darkBlue' ? 'white' : 'black') }}>{props.heading}</h1>          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'darkBlue' ? '#000055' : (props.mode === 'darkGrey' ? 'grey' : 'white'),
              color: props.mode === 'darkGrey' ? 'black' : (props.mode === 'darkBlue' ? 'white' : 'black'),
              fontWeight: style.fontWeight,
              fontStyle: style.fontStyle
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-dark mx-3" onClick={handleUpClick} style={{ color: 'white' }}>UpperCase</button>
        <button className="btn btn-dark mx-1" onClick={handleLoClick} style={{ color: props.mode === 'white' }}>LowerCase</button>
        <button className="btn btn-dark mx-3" onClick={handleItClick} style={{ color: props.mode === 'white' }}>Italic</button>
        <button className="btn btn-dark mx-1" onClick={handleBclick} style={{ color: props.mode === 'white' }}>Bold</button>
        <button className="btn btn-dark mx-2" onClick={handleClear} style={{ color: props.mode === 'white' }}>Clear</button>

  <div className="container my-4" style={{ backgroundColor: props.mode === 'darkBlue' ? '#000055' : (props.mode === 'darkGrey' ? 'grey' : 'white'), color: props.mode === 'dark' || props.mode === 'darkGrey' ? 'white' : 'black' }}>
    <h2 style={{ color: props.mode === 'darkGrey' ? 'black' : (props.mode === 'darkBlue' ? 'white' : 'black') }}>Text Summary</h2>
    <p style={{ color: props.mode === 'darkGrey' ? 'black' : (props.mode === 'darkBlue' ? 'white' : 'black') }}>{`${text.length === 0 ? 0 : text.split(" ").length}`} words &amp; {text.length} Characters</p>
    <p1 style={{ color: props.mode === 'darkGrey' ? 'black' : (props.mode === 'darkBlue' ? 'white' : 'black') }}> {`${text.length === 0 ? 0 : 0.008 * text.split(" ").length}`} Minutes Read.</p1>
  </div>
    </>
  );
}