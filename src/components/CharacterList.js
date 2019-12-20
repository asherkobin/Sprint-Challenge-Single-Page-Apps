import React from "react";
import CharacterCard from "./CharacterCard";
import Styled from "styled-components";

export default function CharacterList({rmCharacters}) {
  const CharacterListContainer = Styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  console.log("CharacterList got", rmCharacters);

  return (
    <CharacterListContainer>
      {
        rmCharacters.map(c => <CharacterCard key={c.id} characterData={c} />)
      }
    </CharacterListContainer>
  );
}
