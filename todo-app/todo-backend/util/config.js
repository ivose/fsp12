//require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL || undefined
const REDIS_URL = process.env.REDIS_URL || undefined
const PORT = process.env.PORT || undefined

//console.log(process.env.MONGO_URL, process.env.REDIS_URL)

module.exports = {
  MONGO_URL,
  REDIS_URL,
  PORT
}