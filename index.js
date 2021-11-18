const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(formidable());
app.use(cors());


app.get("/", (req, res) => {
  res.json("Welcome to my Marvel back-end !");
});



const comicsRoutes = require("./routes/comics")
app.use(comicsRoutes)

const characterRoutes = require("./routes/characters")
app.use(characterRoutes)
app.all("*", (req, res)=>{
  {res.status(404).json("This page does not exist ! ")}
})
app.listen(process.env.PORT, () => {
  console.log("Server started on Port 4000");
});
