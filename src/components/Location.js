import React from "react";
import { useRouteMatch } from "react-router-dom";
import Styled from "styled-components";
import Residents from "./Residents";
import useGetObject from "../hooks/useGetObject";

function Location() {
  const routeMatch = useRouteMatch();
  const locationId = routeMatch.params.locationId;
  const locationInfo = useGetObject("https://rickandmortyapi.com/api/location/" + locationId);

  const LocationInfo = Styled.div`
    text-align: center;
  `;

  return (
    !locationInfo ? <React.Fragment /> :
    <LocationInfo>
      <div>{locationInfo.name}</div>
      <Residents residentUrls={locationInfo.residents} />
    </LocationInfo>
  );
}

export default Location;