import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import styled from '@emotion/styled'
import Heart from './Heart'


const Favorites = ({images, toggleFav}) => {
  return (
    <Container>
      <hr className="line"/>
      <div className='title'>
        <Heart icon="redHeartIcon" alt="red heart icon" className="titleHeart"/>
        <Title>Favorites</Title>
      </div>
      <Grid container spacing={3} className="grid">
        {images.map((image) => {
          const [fav, setFav] = useState(false);
          const [heartIcon, setHeartIcon] = useState("whiteHeartIcon");
          const [heartAlt, setHeartAlt] = useState("white heart icon");
          const handleClick = () => {
            setFav(!fav);
            toggleFav(image.id);
            if (heartIcon == "whiteHeartIcon") {
              setHeartIcon("redHeartIcon")
            }
            else {
              setHeartIcon("whiteHeartIcon")
            }
            if (heartAlt == "white heart icon") {
              setHeartAlt("red heart icon")
            }
            else {
              setHeartAlt("white heart icon")
            }
          };
          if (image.fav == true) {
            return (
              <Grid item xs={4} key={image.id}>
                <div className={`${fav ? "fav" : ""}`} onClick={handleClick}>
                  <img src={image.url} className="image"/>
                  <Heart icon={heartIcon} alt={heartAlt} className="heart"/>
                </div>
              </Grid>
            );
          }
        })}
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
