require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = process.env.API_KEY;

router.get("/characters", async (req, res) => {
  let searchName = ""
  try {
    if(req.query.name){
       searchName = "&name="+req.query.name
    
    }
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${apiKey}${searchName}`
    );
    res.status(200).json(response.data.results);
  } catch (error) {
    console.log(error.message);
  }
});


module.exports = router;