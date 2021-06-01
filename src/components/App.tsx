import React, { FC } from 'react'
import styled from '@emotion/styled'
import Store from './Store'
import Header from './Header'
import Searchbar from './Searchbar'

const App: FC = () => {
  return (
    <Container>
      <Store>
        <Header />
        <Searchbar />
      </Store>
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

export default App
