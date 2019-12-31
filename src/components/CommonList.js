import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";
import Styled from "styled-components";
 
export default function CommonList({apiUrl, dataLabel, cardComponent}) {
  const [dataItems, setDataItems] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [searchFilter, setSearchFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const dataUrl = apiUrl + "?page=" + pageNumber + searchFilter;
    console.log("dataUrl:", dataUrl);
    
    Axios
      .get(dataUrl)
      .then(res => {
        console.log("Api Returned Data", res.data.results)
        setDataItems(res.data.results);
        setPaginationInfo(res.data.info);
      })
      .catch(err => {
        if (err.response.status === 404) {
          setDataItems([]);
          setPaginationInfo({});
        }
        else {
          console.log(err);
        }
      });
  }, [pageNumber, searchFilter, apiUrl]);

  function setSearchFilterWithPageReset(searchFilter) {
    setSearchFilter(searchFilter);
    setPageNumber(1);
  }

  const CommonListContainer = Styled.section`
    display: grid;
    grid-template-columns: auto auto auto;
  `;

  const NoResultsMessage = Styled.span`
    margin-top: 20px;
    color: red;
  `;

  return (
    <>
    <SearchForm buttonLabel={"Search " + dataLabel} setSearchFilter={setSearchFilterWithPageReset}/>
    <Pagination paginationInfo={paginationInfo} setPageNumber={setPageNumber} />
    <CommonListContainer>
      { 
        dataItems && dataItems.length > 0 ? 
          dataItems.map((dataItem) => {
            return React.createElement(cardComponent, { itemInfo: dataItem, key: dataItem.id });
          })
          :
          <NoResultsMessage>No Results</NoResultsMessage>
      }
    </CommonListContainer>
    <Pagination paginationInfo={paginationInfo} setPageNumber={setPageNumber} />
    </>
  );
}
