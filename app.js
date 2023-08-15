const express = require("express");
const { default: axios } = require("axios");
const {
  SEARCH_URL,
  API_KEY,
  TOP_TEN_SONGS_URL,
  FETCH_LYRICS_URL,
  FETCH_TRACK_URL,
} = require("./constant");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(
  cors({
    origin: "https://lyric-finderr.vercel.app",
  })
);

app.get("/fetch-top-ten", (req, res) => {
  const URL = TOP_TEN_SONGS_URL.replace("$API_KEY", API_KEY);
  axios
    .get(URL)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/search", (req, res) => {
  const URL = SEARCH_URL.replace("$QUERY", req.query.query).replace(
    "$API_KEY",
    API_KEY
  );
  axios
    .get(URL)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/fetch-lyrics", (req, res) => {
  const URL = FETCH_LYRICS_URL.replace("$TRACK_ID", req.query.trackId).replace(
    "$API_KEY",
    API_KEY
  );
  axios
    .get(URL)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/fetch-track", (req, res) => {
  const URL = FETCH_TRACK_URL.replace("$TRACK_ID", req.query.trackId).replace(
    "$API_KEY",
    API_KEY
  );
  axios
    .get(URL)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));
