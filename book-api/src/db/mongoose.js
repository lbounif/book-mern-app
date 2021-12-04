const mongoose = require("mongoose")
// .env
require("dotenv").config()

const MONGODB_URL = `mongodb://${process.env.DATABASE_HOST}:
${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

