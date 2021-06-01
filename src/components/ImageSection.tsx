import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Image from './Image';

const ImageSection = ({images, toggleFav}) => {
  return (
    <Grid container spacing={3} className="grid">
      {images.map(image =>
        <Image
          image={image}
          toggleFav={toggleFav}
          initialIcon="whiteHeartIcon"
          initialAlt="white heart icon"
        />
      )}
    </Grid>
  );
};

export default ImageSection
