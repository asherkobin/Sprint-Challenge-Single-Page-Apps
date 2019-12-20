import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

import * as rmSampleData from "./Data.json";

export default function App() {
  const [rmCharacters, setRMCharacters] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [apiUrl, setApiUrl] = useState("");
  
  useEffect(() => {
    Axios
      .get(apiUrl)
      .then(res => {
        console.log("Api Returned Characters", res.data.results)
        setRMCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  }, [apiUrl]);

  useEffect(() => {
    setApiUrl("https://rickandmortyapi.com/api/character/" + searchFilter);
  }, [searchFilter]);

  return (
    <main>
      <Header />
      <Switch>
        <Route path="/characters">
          <CharacterList rmCharacters={rmCharacters} />
        </Route>
        <Route path="/">
          <WelcomePage />
          <SearchForm setSearchFilter={setSearchFilter} />
        </Route>
      </Switch>
    </main>
  );
}
