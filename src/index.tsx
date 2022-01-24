import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";

interface BoxProps {
    size: string;
    style: CSSProperties;
    children: string;
}

function Box(props: BoxProps) {
    let size: string = "";
    props.size ? size = props.size : size = "box--small"
    return (
        <div className={`box box--${size}`} style={props.style}>
            {props.children}
        </div>
    );
}

const element = (
    <div>
        <Box size="small" style={{ backgroundColor: "lightblue" }}>
            Small Lightblue box
        </Box>
        <Box size="medium" style={{ backgroundColor: "pink" }}>
            medium pink box
        </Box>
        <Box size="large" style={{ backgroundColor: "orange" }}>
            large orange box
        </Box>
    </div>
);

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
