
module.exports = {
  omdb: process.env.omdb,
  youtube: process.env.youtube,
  MONGODB_URI: process.env.MONGODB_URI,
  twitter: {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
  }
}
