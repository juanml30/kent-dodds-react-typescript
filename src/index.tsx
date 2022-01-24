import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";

const state = { eventCount: 0, userName: "" };

interface newStateProps {
    eventCount?: number;
    userName?: string
}

function setState(newState: newStateProps) {
    Object.assign(state, newState);
    renderApp();
}

function App() {
    function handleClick() {
        setState({ eventCount: state.eventCount + 1 });
    }
    return (
        <div>
            <p>There have been {state.eventCount} events.</p>
            <button onClick={handleClick}>Click Me</button>
            <p>You Typed: {state.userName}</p>
            <div>
                <input
                    type="text"
                    onChange={event => setState({userName: event.target.value}) }
                />
            </div>
        </div>
    );
}

function renderApp() {
    ReactDOM.render(<App />, document.getElementById("root"));
}

renderApp();

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
