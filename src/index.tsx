import React, { BaseSyntheticEvent, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";

function UsernameForm() {
    const [username, setUsername] = React.useState("");
    const isLowerCase = username === username.toLowerCase();
    const error = isLowerCase ? null : "Username must be lower case";

    function handleSubmit(event: BaseSyntheticEvent) {
        event.preventDefault();
        const username = event.target.elements.username.value;
        console.log(username);
    }

    function handleChange(event: BaseSyntheticEvent) {
        setUsername(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">
                    Username:
                    <input
                        onChange={handleChange}
                        type="text"
                        id="username"
                        placeholder="please use Lowercase for your username"
                    />
                </label>
                <div style={{color: "red"}}>{error}</div>
                <button type="submit" disabled={Boolean(error)}>Save</button>
            </div>
        </form>
    );
}

ReactDOM.render(<UsernameForm />, document.getElementById("root"));

/* ReactDOM.render(
  <React.StrictMode>
    <App />a
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
