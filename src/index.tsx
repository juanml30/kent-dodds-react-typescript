import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";

interface SayHelloProps {
    firstName: string;
    lastName: string;
}

/* const SayHello = (props: SayHelloProps) => {
      <h1>
          Hello {props.firstName} {props.lastName}
      </h1>
} */


function SayHello(props:SayHelloProps):JSX.Element {
    return (
        <h1>
            Hello {props.firstName} {props.lastName}
        </h1>
    );
}

const element = <SayHello firstName={"Juan"} lastName={"Moreno"} />;

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
