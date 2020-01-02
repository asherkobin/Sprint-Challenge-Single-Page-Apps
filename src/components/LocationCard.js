import React from "react";
import Styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function LocationCard({itemInfo}) {
  const LocationCardContainer = Styled.div`
    border: 1px solid black;
    margin: 5px;
    text-align: center;
  `;

  const LocationHeader = Styled.div`
    color: white;
    background-color: black;
    font-size: 20px;
    line-height: 40px;
  `;

  const LocationBody = Styled.div`
    padding: 10px;
  `;

  return (
    <LocationCardContainer>
      <LocationHeader>{itemInfo.name}</LocationHeader>
      <LocationBody>
        <div>{itemInfo.type}</div>
        <div>{itemInfo.dimension}</div>
        <div>Residents: {itemInfo.residents.length}</div>
        <div><NavLink to={{pathname: "/locations/" + itemInfo.id, locationInfo: {itemInfo}}}>Explore This Location</NavLink></div>
      </LocationBody>
    </LocationCardContainer>
  );
}
