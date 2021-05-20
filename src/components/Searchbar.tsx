import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import { Button, Col, Form } from 'react-bootstrap';
import { searchImages } from "./request";
import "./styles.css"
import Favorites from "./Favorites"
import Image from "./Image"

const Searchbar = () => {
  const [imagelinks, setImagelinks] = useState([]);
  const [images, setImages] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [favImages, setFavImages] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    searchAllImages(keyword);

  };

  const searchAllImages = async (keyword) => {
    const response = await searchImages(keyword);
    setImagelinks(response.data.message);
    const imageObjects = imagelinks.map((link, index) => {
      let newImage = {
        url: link,
        id: index,
        fav: false
      };
      return newImage;
    });
    setImages(imageObjects);
  };

  const toggleFav = (imageId) => {
    const newImages = images.map(image => {
      if (image.id == imageId) {
        image.fav = !image.fav;
      }
      return image;
    });
    setImages(newImages);
}

  return (
    <Container>
      <Form inline onSubmit={handleSubmit} className="form">
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="keyword">
            <Form.Control
              type="text"
              name="keyword"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              placeholder="Search a Dog"
            />
          </Form.Group>
        </Form.Row>
        <Button type="submit" className="button">
          Search
        </Button>
      </Form>
      <Image images={images} toggleFav={toggleFav} />
      <Favorites images={images} toggleFav={toggleFav} />
    </Container>
  );
}

const Container = styled.div`
  display: flex,
  flex-direction: column,
`

export default Searchbar
