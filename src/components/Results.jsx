import React from "react";
import ArtItem from "./ArtItem";

// Styled Components
import styled from "styled-components";
import { MoreButton } from "../styles";

export default function Results({
  loadMoreResultsHandler,
  results,
  loadedPage,
  loadedResults,
  setLoadedPage,
}) {
  return (
    <LayoutContainer>
      <ResultContainer>
        {results.map((item, i) => {
          return (
            <ArtItem
              key={"id" + i + item.id}
              imageURL={item.primaryimageurl}
              artist={
                item.peoplecount > 0 ? item.people : [{ name: "Kein Artist" }]
              }
              title={item.title}
            />
          );
        })}
      </ResultContainer>
      <MoreButton onClick={loadMoreResultsHandler}>Load More</MoreButton>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1rem;
`;
