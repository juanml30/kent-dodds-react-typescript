import React, { BaseSyntheticEvent, ChangeEventHandler, useState } from "react";
import ReactDOM from "react-dom";
import { JsxAttribute, JsxAttributes } from "typescript";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";

interface NameProps {
    name: string;
    onNameChange: ChangeEventHandler;
}

function Name({ name, onNameChange }: NameProps) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" value={name} onChange={onNameChange} />
        </div>
    );
}

interface FavoriteAnimalProps {
    animal: string;
    onAnimalChange: ChangeEventHandler;
}

function FavoriteAnimal({ animal, onAnimalChange }: FavoriteAnimalProps) {
    return (
        <div>
            <label htmlFor="animal">Favorite Animal: </label>
            <input
                type="text"
                onChange={onAnimalChange}
            />
        </div>
    );
}

interface DisplayProps {
    name: string;
    animal: string;
}

function Display({ name, animal }: DisplayProps) {
    return <div>{`Hey ${name}, your favorite animal is ${animal}!`}</div>;
}

function App() {
    const [name, setName] = React.useState("");
    const [animal, setAnimal] = React.useState("");

    return (
        <form>
            <Name
                name={name}
                onNameChange={(event: BaseSyntheticEvent) =>
                    setName(event.target.value)
                }
            />
            <FavoriteAnimal
                animal={animal}
                onAnimalChange={(event: BaseSyntheticEvent) =>
                    setAnimal(event.target.value)
                }
            />
            <Display name={name} animal={animal} />
        </form>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

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
