import React, { BaseSyntheticEvent, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";

function Greeting() {
    const [name, setName] = useState(() => {
        return window.localStorage.getItem("name") || "";
    });

    React.useEffect(() => {
        window.localStorage.setItem("name", name);
    }, [name]);

    const handleChange = (event: BaseSyntheticEvent) =>
        setName(event.target.value);

    return (
        <div>
            <form action="">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={name}
                />
            </form>
            {name ? <h1>{name}</h1> : <h5>Ingrese un nombre por favor</h5>}
        </div>
    );
}

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount(() => count + 1)}>{count}</button>
            <Greeting />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

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
