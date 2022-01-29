import React, {
  BaseSyntheticEvent,
  useState,
} from "react";

import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";
import type { Query } from "@favware/graphql-pokemon";

interface PokemonInfoProps {
  pokemonName: string;
}

interface GraphQLPokemonResponse<K extends keyof Omit<Query, "__typename">> {
  data: Record<K, Omit<Query[K], "__typename">>;
}

function PokemonInfo({ pokemonName }: PokemonInfoProps) {
  const [pokemon, setPokemon] = useState({num: 0, species:"",sprite:""});
  React.useEffect(() => {
    if (!pokemonName) {
      return;
    }
    fetchPokemon(pokemonName).then((pokemonData) => {
      setPokemon(pokemonData);
    });
  }, [pokemonName]);
  if (pokemon.num === 0 || !pokemon) {
    return <div>No era pokemon</div>;
  }
  return (
    <>
      <pre>
        {console.log(pokemon.sprite)}
        {JSON.stringify(pokemon, null, 2)}
      </pre>
      <img src={pokemon.sprite} alt="" />
    </>
  );
}

function App() {
  const [pokemonName, setPokemonName] = React.useState("");

  function handleSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
    setPokemonName(event.target.elements.pokemonName.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName">Pokemon Name</label>
        <div>
          <input type="text" id="pokemonName" />
          <button type="submit">Submit</button>
        </div>
      </form>
      <hr />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  );
}

function fetchPokemon(name: string) {
  const pokemonQuery = `
  getPokemon(pokemon: ${name} reverseFlavorTexts: true takeFlavorTexts: 1) {
		num
		species
    sprite
  }
  `;

  return window
    .fetch("https://graphqlpokemon.favware.tech/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
      {
        ${pokemonQuery}
      }
    `,
      }),
    })
    .then((res) => res.json() as Promise<GraphQLPokemonResponse<"getPokemon">>)
    .then((response) => response.data.getPokemon);
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
