
const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const connectDB = require("./src/config/db");
require("dotenv").config();


const app = express();
app.use(express.json());
connectDB();

app.use(cors());

app.use("/api", userRoutes);
app.get("/", (req, res) => {
  res.send("Backend working prefectly fine!!!");
});

module.exports = app;
