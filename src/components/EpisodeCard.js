import React from "react";
import Styled from "styled-components";

export default function EpisodeCard({itemInfo}) {
  const EpisodeCardContainer = Styled.div`
    border: 1px solid black;
    margin: 5px;
    text-align: center;
  `;

  const EpisodeHeader = Styled.div`
    color: white;
    background-color: black;
    font-size: 20px;
    line-height: 40px;
  `;

  const EpisodeBody = Styled.div`
    padding: 10px;
  `;

  return (
    <EpisodeCardContainer>
      <EpisodeHeader>{itemInfo.name}</EpisodeHeader>
      <EpisodeBody>
        <div>{itemInfo.air_date}</div>
        <div>{itemInfo.episode}</div>
      </EpisodeBody>
    </EpisodeCardContainer>
  );
}
