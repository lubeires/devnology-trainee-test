// environmet variables
require("dotenv").config();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

const express = require("express");
const articleRoutes = require("./routes/article");
const userRoutes = require("./routes/user");
const cors = require("cors");
const mongoose = require("mongoose");

// express app
const app = express();

// allows cross origin resource sharing
app.use(cors());

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/articles", articleRoutes);
app.use("/api/user", userRoutes);

mongoose.set("strictQuery", false);

// connect to db
mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to db...");
  })
  .catch((err) => console.error(err));

// listen for requests
app.listen(port, () => console.log(`Server running on port ${port}...`));
