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

  module.exports = router