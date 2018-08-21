const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// express config
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// @ts-ignore
app.use(morgan("dev"));
app.use(cors());

// mongooose config
// (node:9388) DeprecationWarning: current URL string parser is deprecated
const mongoOptions = { useNewUrlParser: true };

const db = require("./config").mongo_uri;
mongoose
  .connect(
    db,
    mongoOptions
  )
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.error(err));

// Routes
const list = require("./routes/list");
const item = require("./routes/item");
app.use("/lists", list);
app.use("/lists/:id", item);

// Server config
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
