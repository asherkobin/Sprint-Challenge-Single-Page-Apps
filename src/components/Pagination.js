import React from "react";
import Styled from "styled-components";

const PaginationNavigation = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const PageNavigation = Styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Pagination({ paginationInfo, setPageNumber }) {
  const prevPage = paginationInfo.prev ? getPageFromUrl(paginationInfo.prev) : 0;
  const nextPage = paginationInfo.next ? getPageFromUrl(paginationInfo.next) : 0;
  const currentPage = nextPage === 0 ? prevPage + 1 : (prevPage + nextPage) / 2;

  function getPageFromUrl(url) {
    return parseInt(new URL(url).searchParams.get("page"));  
  }

  return (
    <PaginationNavigation>
      { paginationInfo.prev === "" ? "" : <PageNavigation onClick={() => setPageNumber(prevPage)}>Prev</PageNavigation> }
      {
        [...Array(paginationInfo.pages)].map((e, i) =>
          <PageNavigation 
            style={currentPage === i + 1 ? { color: "black", fontWeight: "bold" } : { color: "blue" }} 
            key={i} 
            onClick={() => setPageNumber(i + 1)}>
            {i + 1}
          </PageNavigation>
        )
      }
      { paginationInfo.next === "" ? "" : <PageNavigation onClick={() => setPageNumber(nextPage)}>Next</PageNavigation> }
    </PaginationNavigation>
  );
}
