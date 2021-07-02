import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Heart from './Heart';


const Image = ({image, toggleFav, initialIcon, initialAlt}) => {
  const [fav, setFav] = useState(false);
  const [heartIcon, setHeartIcon] = useState(initialIcon)
  const [heartAlt, setHeartAlt] = useState(initialAlt)
  const handleClick = () => {
    setFav(fav => !fav);
    toggleFav(image.id, fav);
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
  useEffect(() => {
    setFav(fav => false);
    setHeartIcon(initialIcon);
    setHeartAlt(initialAlt);
  }, [image]);
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
}

export default Image
