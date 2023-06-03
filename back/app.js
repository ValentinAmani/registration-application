const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const registrationRoutes = require("./routes/registration");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Database not connected");
  });

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/api/registration", registrationRoutes);

module.exports = app;
