require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const switchRoutes = require("./routes/switchRoutes");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/switches", switchRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to MongoDB & Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
