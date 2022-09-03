import React from "react";
// Styled Components
import styled from "styled-components";

export default function ArtItem({ imageURL, artist, title }) {
  return (
    <ItemContainer>
      <ItemImg src={imageURL} alt="" />
      <h2>{artist[0].name}</h2>
      <p>{title}</p>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0.5rem;
  p {
    max-width: 35rem;
  }
`;

const ItemImg = styled.img`
  object-fit: cover;
  object-position: center;
  height: 35rem;
  max-width: 35rem;
`;
