import React from "react";
import useGetObject from "../hooks/useGetObject";

function Resident({residentUrl}) {
  const characterInfo = useGetObject(residentUrl);
 
  return (
    !characterInfo ? <div>...</div> : <div>{characterInfo.name}</div>
  )
}

export default Resident;