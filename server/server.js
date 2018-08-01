const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// express config
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(morgan("dev"))

// mongooose config
// (node:9388) DeprecationWarning: current URL string parser is deprecated
const mongoOptions = { useNewUrlParser: true }

const db = require('./config').mongo_uri
mongoose
  .connect(db, mongoOptions)
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.error(err))

// Routes
const list_routes = require('./routes/lists')
app.use('/lists', list_routes)


// Server config
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))