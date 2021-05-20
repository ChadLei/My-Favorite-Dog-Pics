import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Searchbar from './Searchbar'

const App: FC = () => {
  return (
    <Container>
      <Header />
      {/* Happy coding! */}
      <Searchbar />
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
