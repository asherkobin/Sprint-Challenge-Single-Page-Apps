import React, { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import Styled from "styled-components";

export default function App() {
  const NavigationContainer = Styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 20px;
  `;

  return (
    <main>
      <Header />
      <NavigationContainer>
        <NavLink to="/characters" activeStyle={{ fontWeight: "bold" }}>Characters</NavLink>
        <NavLink to="/locations" activeStyle={{ fontWeight: "bold" }}>Locations</NavLink>
        <NavLink to="/episodes" activeStyle={{ fontWeight: "bold" }}>Episodes</NavLink>
      </NavigationContainer>
      <Switch>
        <Route path="/characters">
          <CharacterList />
        </Route>
        <Route path="/locations">
          <CharacterList />
        </Route>
        <Route path="/episodes">
          <CharacterList />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
