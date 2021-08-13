import React from "react"
import styled from "styled-components/macro"

import HeaderImg from "../HeaderImg"
import Stats from "../Stats"

import { QUERY } from "../../constants"

const Card = () => {
  return (
    <CardWrapper>
      <CardBody>
        <Title>
          Get <HighLight>insights</HighLight> that help your business grow.
        </Title>
        <Text>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </Text>
        <Stats />
      </CardBody>
      <Overlay>
        <HeaderImg />
      </Overlay>
    </CardWrapper>
  )
}

const CardWrapper = styled.article`
  display: flex;
  justify-content: center;
  max-height: 446px;
  width: 80%;

  @media ${QUERY} {
    flex-direction: column-reverse;
    max-height: none;
    max-width: 440px;
    text-align: center;
    width: 90%;
  }
`

const CardBody = styled.div`
  background-color: var(--color-primary-dark-desaturated-blue);
  padding: 5rem;
  max-width: 600px;
  width: 50%;

  @media ${QUERY} {
    padding: 2.5rem;
    width: 100%;
  }
`

const Title = styled.h1`
  color: var(--color-white);
  font-weight: var(--font-weight-medium);
  font-size: 2rem;
  line-height: 1;
  letter-spacing: 0.1em;
  @media ${QUERY} {
    font-size: 1.5rem;
    line-height: 1.2;
  }
`
const HighLight = styled.span`
  color: var(--color-primary-soft-violet);
  line-height: 1;
  @media ${QUERY} {
    line-height: 1.2;
  }
`

const Text = styled.p`
  color: var(--color-trasparent-white-stat);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-normal);
  margin-right: 2rem;
  margin-top: 2rem;
  line-height: 1.8;

  @media ${QUERY} {
    margin-right: 0;
    margin-top: 1rem;
  }
`

const Overlay = styled.div`
  background-color: var(--color-primary-soft-violet);
  max-width: 540px;
  width: 50%;

  @media ${QUERY} {
    width: 100%;
  }
`

export default Card
