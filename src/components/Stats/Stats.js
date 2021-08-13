import React from "react"
import styled from "styled-components/macro"

import { QUERY } from "../../constants"

const Stats = () => {
  return (
    <ItemWrapper>
      <ItemDetails>
        <ItemTitle>10k+</ItemTitle>
        <ItemText>companies</ItemText>
      </ItemDetails>
      <ItemDetails>
        <ItemTitle>314</ItemTitle>
        <ItemText>templates</ItemText>
      </ItemDetails>
      <ItemDetails>
        <ItemTitle>12M+</ItemTitle>
        <ItemText>queries</ItemText>
      </ItemDetails>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 4rem;
  margin-top: 3rem;

  @media ${QUERY} {
    flex-direction: column;
    margin-right: 0;
    margin-top: 0;
  }
`

const ItemDetails = styled.div`
  color: var(--color-trasparent-white-stat);

  @media ${QUERY} {
    margin-top: 2rem;
  }
`

const ItemTitle = styled.h2`
  color: var(--color-white);
  font-family: var(--font-sans-serif-main);
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.05rem;
  line-height: 1.75;
`

const ItemText = styled.p`
  font-family: var(--font-sans-serif-stat);
  font-size: calc(var(--font-size-body) * 0.8);
  font-weight: var(--font-weight-normal);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`

export default Stats
