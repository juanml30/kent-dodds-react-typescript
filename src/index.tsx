import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";

interface messageProps {
  msg: string
}

const Message = (props: messageProps):JSX.Element => <div className="message">{props.msg}</div>
const element = (
  <div className="container">
    <Message msg="Hello World" />
    <Message msg= "Bye World" />
  </div>
)

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
