import React, { BaseSyntheticEvent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";

function handleSubmit(event: BaseSyntheticEvent) {
    event.preventDefault()
    const username = event.target.elements.username.value
    console.log(username)
}

function UsernameForm() {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">
                    Username:
                    <input type="text" id="username" />
                </label>
                <button type="submit">Save</button>
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
