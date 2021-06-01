import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled'
import { Button, Col, Form } from 'react-bootstrap';
import { searchImages } from "./request";
import { Context } from "./Store"
import "./styles.css"
import Favorites from "./Favorites"
import ImageSection from "./ImageSection"

const Searchbar = () => {
  const [state, dispatch] = useContext(Context);
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    searchAllImages(keyword);
    setKeyword("");
  };

  const searchAllImages = async (keyword) => {
    const response = await searchImages(keyword);
    const imageObjects = response.data.message.map((link, index) => {
      let newImage = {
        url: link,
        id: link,
        fav: false
      };
      return newImage;
    });
    dispatch({type: 'SET_IMAGES', payload: imageObjects});
  };

  const toggleFav = (imageId, fav) => {
    if (fav == false) {
      const newImages = state.images.filter(image =>
        image.id == imageId
      )
      dispatch({type: 'ADD_FAV', payload: newImages});
    }
    else {
      const newImages = state.favImages.filter(image =>
        image.id != imageId
      )
      dispatch({type: 'REMOVE_FAV', payload: newImages});
    }
  };

  const favSectionToggle = (imageId, fav) => {
    const images = state.images.map(image =>
      if (image.id == imageId) {
        let newImage = {
          url: image.url.replace(/^https?\:\/\//i, "http://");,
          id: image.id.replace(/^https?\:\/\//i, "http://"),
          fav: false
        };
        image = newImage;
      }
      return image
    );
    dispatch({type: 'SET_IMAGES', payload: images});
    const newImages = state.favImages.filter(image =>
      image.id != imageId
    )
    dispatch({type: 'REMOVE_FAV', payload: newImages});
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
      <ImageSection images={state.images} toggleFav={toggleFav} />
      <Favorites images={state.favImages} toggleFav={favSectionToggle} />
    </Container>
  );
}

const Container = styled.div`
  display: flex,
  flex-direction: column,
`

export default Searchbar
