require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = process.env.API_KEY;

router.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${apiKey}`
    );
    res.status(200).json(response.data.results);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/comics/:characterId", async (req, res) => {
  const characterId = req.params.characterId;
  const address = `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${apiKey}`;

  console.log(address);
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${apiKey}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
