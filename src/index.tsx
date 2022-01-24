import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";

interface characterCountProps {
    text: string;
}

function CharacterCount(props: characterCountProps) {
    const length = props.text.length ? props.text.length : "Not"
    return <h1>You have {length} characters</h1>;
}

const element = <>
    <CharacterCount text="Jugando" />;
    <CharacterCount text="" />;
</> 

ReactDOM.render(element, document.getElementById("root"));

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
