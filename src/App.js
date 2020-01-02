import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import Styled from "styled-components";
import CommonList from "./components/CommonList";
import CharacterCard from "./components/CharacterCard";
import LocationCard from "./components/LocationCard";
import EpisodeCard from "./components/EpisodeCard";
import Location from "./components/Location";

export default function App() {
  const NavigationContainer = Styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 20px;
  `;

  const activeLinkStyle = {
    fontWeight: "bold",
    textDecoration: "none"
  };

  return (
    <main>
      <Header />
      <NavigationContainer>
        <NavLink to="/characters" activeStyle={activeLinkStyle}>Characters</NavLink>
        <NavLink to="/locations" activeStyle={activeLinkStyle}>Locations</NavLink>
        <NavLink to="/episodes" activeStyle={activeLinkStyle}>Episodes</NavLink>
      </NavigationContainer>
      <Switch>
        <Route path="/characters" key="characters">
          <CommonList
            CardComponent={CharacterCard} 
            apiUrl="https://rickandmortyapi.com/api/character/" 
            dataLabel="Characters" />
        </Route>
        <Route path="/locations/:locationId">
          <Location />
        </Route>
        <Route path="/locations" key="locations">
          <CommonList
            CardComponent={LocationCard}
            apiUrl="https://rickandmortyapi.com/api/location/"
            dataLabel="Locations" />
        </Route>
        <Route path="/episodes" key="episodes">
          <CommonList 
            CardComponent={EpisodeCard} 
            apiUrl="https://rickandmortyapi.com/api/episode/" 
            dataLabel="Episodes" />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
