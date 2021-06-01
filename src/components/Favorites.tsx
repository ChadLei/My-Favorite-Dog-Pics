import React, { useState, useEffect, useContext } from 'react';
import Grid from "@material-ui/core/Grid";
import styled from '@emotion/styled'
import { Context } from "./Store"
import Image from './Image';
import Heart from './Heart';

const Favorites = ({images, toggleFav}) => {
  const [state, dispatch] = useContext(Context);
  return (
    <Container>
      <hr className="line"/>
      <div className='title'>
        <Heart icon="redHeartIcon" alt="red heart icon" className="titleHeart"/>
        <Title>Favorites</Title>
      </div>
      <Grid container spacing={3} className="grid">
        {images.map(image =>
          <Image
            image={image}
            toggleFav={toggleFav}
            initialIcon="redHeartIcon"
            initialAlt="red heart icon"
          />
        )}
      </Grid>
    </Container>
  );
}

const Container = styled.div({
  paddingTop: '50px',
  paddingBottom: '100px',
})

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
  marginLeft: '30px'
})

export default Favorites;
