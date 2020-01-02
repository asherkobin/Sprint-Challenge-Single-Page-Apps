import { useEffect, useState } from "react";
import Axios from "axios";

function useGetObject(dataUrl) {
  const [responseData, setResponseData] = useState();

  useEffect(() => {
    Axios
      .get(dataUrl)
      .then(res => {
        setResponseData(res.data);
      })
      .catch(err => {
        console.log("Axios Error", err);
      });
  }, [dataUrl]);

  return responseData;
}

export default useGetObject;