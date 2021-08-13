import React from "react"
import styled from "styled-components/macro"

import Card from "../Card"

const App = () => {
  return (
    <Main>
      <Card />
    </Main>
  )
}

const Main = styled.main`
  align-items: center;
  background-color: var(--color-primary-very-dark-blue);
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export default App
