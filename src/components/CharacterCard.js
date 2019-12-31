import React from "react";
import Styled from "styled-components";

export default function CharacterCard({itemInfo}) {
  const CharacterCardContainer = Styled.div`
    border: 1px solid black;
    margin: 5px;
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
      <CharacterHeader>{itemInfo.name}</CharacterHeader>
      <CharacterBody>
        <div>{itemInfo.species}</div>
        <div>{itemInfo.location.name}</div>
        <div>
          <img src={itemInfo.image} alt={itemInfo.name} style={{ marginTop: "5px" }} />
        </div>
      </CharacterBody>
    </CharacterCardContainer>
  );
}
