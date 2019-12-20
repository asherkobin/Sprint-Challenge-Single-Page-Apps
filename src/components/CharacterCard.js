import React from "react";
import Styled from "styled-components";

export default function CharacterCard({characterData}) {
  const CharacterCardContainer = Styled.div`
    border: 1px solid black;
    margin: 10px;
    text-align: center;
  `;

  const CharacterHeader = Styled.div`
    color: white;
    background-color: black;
    font-size: 20px;
    line-height: 40px;
  `;

  const CharacterBody = Styled.div`
    padding: 10px;
  `;

  return (
    <CharacterCardContainer>
      <CharacterHeader>{characterData.name}</CharacterHeader>
      <CharacterBody>
        <div>{characterData.species}</div>
        <div>{characterData.location.name}</div>
        <div>
          <img src={characterData.image} alt={characterData.name} />
        </div>
      </CharacterBody>
    </CharacterCardContainer>
  );
}
