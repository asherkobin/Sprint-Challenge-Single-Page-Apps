import React from "react";
import Resident from "./Resident";

function Residents({residentUrls}) {
  return (
    residentUrls.map(residentUrl => <Resident residentUrl={residentUrl} key={residentUrl}/>)
  );
}

export default Residents;