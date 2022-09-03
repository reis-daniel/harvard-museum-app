import React from "react";

// Styled Components
import styled from "styled-components";

export default function Searchbar() {
  return (
    <SearchbarContainer>
      <h1>Harvard Museum API</h1>
      <form action="">
        <InputStyled type="text" placeholder="Search" />
      </form>
    </SearchbarContainer>
  );
}

const SearchbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  padding: 1rem 3rem;
`;

const InputStyled = styled.input`
  height: 2rem;
  width: 50vw;
  padding: 0.5rem 2rem;
`;
