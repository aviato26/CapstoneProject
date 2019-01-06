
const express = require('express');
const app = express();
const keys = require('./keys.js');
const request = require('request');
const twit = require('twit');
const tweets = new twit(keys.twitter);
const mongoose = require('mongoose');
const parser = require('body-parser');
const movies = require('./models/movies.js');
const users = require('./models/users.js');
const session = require('express-session');
const port = process.env.PORT || 5000;
let db = mongoose.connection;

mongoose.connect(keys.mongoURI)
.then(() => console.log('connection to mongo succesfull'))
.catch((err) => console.log(err))

app.use(parser());

app.use((req, res, next) => {
  // settings for CORS acceptance
 res.header("Access-Control-Allow-Origin", "http://localhost:3000");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

var sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

app.post('/home', (req, res, next) => {
  if(req.body.post === 'to my list'){
      movies.create({user: req.session.userId ,title: req.body.movieTitle}, (err) => {
        if(err){
          res.send('please enter movie title before adding to movie list')
          next()
        }
      })
    }
    else if(req.body.post === 'get details'){
      let movieData = {};
      request.get(`http://www.omdbapi.com/?apikey=${keys.omdb}&t=${req.body.movieTitle}`, (err, response, body) => {
        if(err){
          throw err
          next()
        } else {
          let parsed = JSON.parse(body);
          movieData.omdb = (parsed);
          request.get(`https://www.googleapis.com/youtube/v3/search?key=${keys.youtube}&part=snippet&q=${req.body.movieTitle}trailer`, (err, response, body) => {
            if(err){
              throw err
              next()
            } else {
              movieData.youtube = JSON.parse(body)
              tweets.get(`/search/tweets.json?q=${req.body.movieTitle}&result_type=popular&count=10`, (err, response, request) => {
                if(err){
                  throw err
                  next()
                } else {
                  movieData.tweets = response;
                  res.send(movieData);
                  next()
                }
              })
            }
          })
        }
      })
    }
  })

  app.get('/mylist', (req, res, next) => {
    movies.find({user: req.session.userId})
    .then(data => {
      res.send(data)
      next()
    })
    .catch(err => {
      console.log(err)
      next()
    })
  })

  app.post('/mylist', (req, res, next) => {
    movies.deleteOne({title: req.body.title[0]}, (err) => {
      if(err){
        console.log(err)
        next()
      }
    })
  })

  app.post('/signup', (req, res, next) => {
    users.create({
      user: req.body.user,
      email: req.body.email,
      password: req.body.password
    }, (err, user) => {
      if(err){
        res.send('this user already exists')
        next()
      }
      else {
        req.session.userId = user._id;
        res.send('new user created')
        next()
      }
    })
  })

  app.post('/login', (req, res, next) => {
    users.authenticate(req.body.email, req.body.password, (err, user) => {
     if(err || !user){
       let err = new Error('wrong email or password');
       err.status = 401;
       next(err)
     }
     else {
       req.session.userId = user._id;
       res.send(user);
       return next();
     }
   })
})

  app.post('/details', (req, res, next) => {
    request.get(`http://www.omdbapi.com/?apikey=${keys.omdb}&t=${req.body.title}`, (err, response, body) => {
      if(err){
        throw err
        next()
      } else {
        res.send(body)
      }
  })
})

app.listen(port, console.log(`server is live on port ${port}`))
