const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const dishes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3002;

app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb+srv://komalsingh30031998:komal.singh@cluster0.c1povmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", dishes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
