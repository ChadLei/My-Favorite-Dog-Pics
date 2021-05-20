const axios = require("axios");
const APIURL = "https://dog.ceo/api/breed";
export const searchImages = (keyword) =>
  axios.get(
    `${APIURL}/${keyword}/images/random/10`
  );
