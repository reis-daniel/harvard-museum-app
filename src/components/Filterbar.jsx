import React from "react";
// React Hooks
import { useState, useEffect, useRef } from "react";

// Styled Components
import styled from "styled-components";
import { ResetButton } from "../styles";

export default function Filterbar({
  fetchDataHandler,
  centuryOptions,
  techniqueOptions,
  classificationOptions,
}) {
  // Refs
  const centurySelect = useRef();
  const techniqueSelect = useRef();
  const classificationSelect = useRef();

  // Handler
  const clearSelectHandler = (refs) => {
    refs.map((ref) => (ref.selectedIndex = 0));
  };

  return (
    <FilterbarContainer>
      <SelectContainer>
        <label htmlFor="century">Century</label>
        <select
          name="century"
          id="century"
          ref={centurySelect}
          onChange={(e) => {
            console.log(e.target.value);
            if (
              e.target.value !== "none" &&
              e.target.value !== "(not assigned)"
            ) {
              fetchDataHandler(true, 1, 100, `century=${e.target.value}`);
            }
          }}
        >
          <option value="none">None</option>
          {centuryOptions.map((opt, i) => {
            return (
              <option key={opt.name + i} value={opt.name}>
                {opt.name}
              </option>
            );
          })}
        </select>
      </SelectContainer>
      <SelectContainer>
        <label htmlFor="technique">Technique / Medium</label>
        <select
          name="technique"
          id="technique"
          ref={techniqueSelect}
          onChange={(e) => {
            console.log(e.target.value);
            if (
              e.target.value !== "none" &&
              e.target.value !== "(not assigned)"
            ) {
              fetchDataHandler(true, 1, 100, `technique=${e.target.value}`);
            }
          }}
        >
          <option value="none">None</option>
          {techniqueOptions.map((opt, i) => {
            return (
              <option key={opt.name + i} value={opt.name}>
                {opt.name}
              </option>
            );
          })}
        </select>
      </SelectContainer>
      <SelectContainer>
        <label htmlFor="classification">Classification</label>
        <select
          name="classification"
          id="classification"
          ref={classificationSelect}
          onChange={(e) => {
            console.log(e.target.value);
            if (
              e.target.value !== "none" &&
              e.target.value !== "(not assigned)"
            ) {
              fetchDataHandler(
                true,
                1,
                100,
                `classification=${e.target.value}`
              );
            }
          }}
        >
          <option value="none">None</option>
          {classificationOptions.map((opt, i) => {
            return (
              <option key={opt.name + i} value={opt.name}>
                {opt.name}
              </option>
            );
          })}
        </select>
      </SelectContainer>
    </FilterbarContainer>
  );
}

const FilterbarContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

const SelectContainer = styled.div`
  width: 12rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  label {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;
