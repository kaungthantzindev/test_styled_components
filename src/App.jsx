import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';

const Container = styled.div`
  background-color: #ffba08;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  )
}

export default App
