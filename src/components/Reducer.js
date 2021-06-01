import React, { useState } from 'react';

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return {
        ...state,
        images: action.payload
      }
    case "ADD_FAV":
      return {
        ...state,
        favImages: state.favImages.concat(action.payload)
      }
    case "REMOVE_FAV":
      return {
        ...state,
        favImages: action.payload
      }
    default:
      return state;
  }
};

export default Reducer;
