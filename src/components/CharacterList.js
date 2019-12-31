import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";
import Styled from "styled-components";
 
export default function CharacterList() {
  const [rmCharacters, setRMCharacters] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [searchFilter, setSearchFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const dataUrl = "https://rickandmortyapi.com/api/character/?page=" + pageNumber + searchFilter;
    console.log("dataUrl:", dataUrl);
    Axios
      .get(dataUrl)
      .then(res => {
        console.log("Api Returned Characters", res.data.results)
        setRMCharacters(res.data.results);
        setPaginationInfo(res.data.info);
      })
      .catch(err => {
        if (err.response.status === 404) {
          setRMCharacters([]);
          setPaginationInfo({});
        }
        else {
          console.log(err);
        }
      });
  }, [pageNumber, searchFilter]);

  function setSearchFilterWithPageReset(searchFilter) {
    setSearchFilter(searchFilter);
    setPageNumber(1);
  }

  const CharacterListContainer = Styled.section`
    display: grid;
    grid-template-columns: auto auto auto;
  `;

  const NoResultsMessage = Styled.span`
    margin-top: 20px;
    color: red;
  `;

  function doPagitation(whereTo) {
    console.log("doPagination", whereTo);
    setPageNumber(whereTo);
  }

  return (
    <>
    <SearchForm buttonLabel="Search Characters" setSearchFilter={setSearchFilterWithPageReset}/>
    <Pagination paginationInfo={paginationInfo} doPagination={doPagitation} />
    <CharacterListContainer>
      { 
        rmCharacters && rmCharacters.length > 0 ? 
          rmCharacters.map(c => <CharacterCard key={c.id} characterData={c} />)
          :
          <NoResultsMessage>No Results</NoResultsMessage>
      }
    </CharacterListContainer>
    <Pagination paginationInfo={paginationInfo} doPagination={doPagitation} />
    </>
  );
}
