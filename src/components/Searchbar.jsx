import React, { useRef } from "react";

// Styled Components
import styled from "styled-components";

export default function Searchbar({ fetchDataHandler }) {
  // Refs
  const InputValue = useRef();

  // Handler
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(InputValue.current.value);
    fetchDataHandler(true, 1, 100, `keyword=${InputValue.current.value}`);
    console.log("Submitted!");
  };

  return (
    <SearchbarContainer>
      <h1>Harvard Museum API</h1>
      <form
        action=""
        onSubmit={(e) => {
          submitFormHandler(e);
        }}
      >
        <InputStyled type="text" placeholder="Search" ref={InputValue} />
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
