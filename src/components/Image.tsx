import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Heart from './Heart';


const Image = ({images, toggleFav}) => {
  return (
    <Grid container spacing={3} className="grid">
      {images.map((image) => {
        const [fav, setFav] = useState(false);
        const [heartIcon, setHeartIcon] = useState("whiteHeartIcon")
        const [heartAlt, setHeartAlt] = useState("white heart icon")
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
        return (
          <Grid item xs={4} key={image.id}>
            <div className={`${fav ? "fav" : ""}`} onClick={handleClick}>
              <div className="imgBox">
                <img src={image.url} className="image"/>
                <Heart icon={heartIcon} alt={heartAlt} className="heart"/>
              </div>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Image
