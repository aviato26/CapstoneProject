import React, { Component } from 'react';
import MovieDetails from './details.js';
import Search from './search.js';
import Twitter from './twitter.js';
import ListButton from './listbutton.js';
import NavBar from './navbar.js'
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: props.title,
      movieDetails: [],
      tweets: [],
      trailer: ''
    }
  }

onSubmit = (e) => {
  e.preventDefault();
  axios.post('/home', {
    post: 'get details',
    movieTitle: this.state.query,
  })
  .then(res => {
    let omdb = Object.entries(res.data.omdb)
    let tweets = Object.entries(res.data.tweets)
    this.setState({
      movieDetails: [...omdb],
      tweets: [...tweets[0][1]],
      trailer: `https://youtube.com/embed/${res.data.youtube.items[0].id.videoId}`
    })
  })
  .catch(err => console.log(err))
  e.target.reset();
}

onChange = (e) => {
  this.setState({
    query: e.target.value
  })
}

toMyList = (e) => {
  e.preventDefault();
  axios.post('/home', {
    post: 'to my list',
    movieTitle: this.state.query
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

  render(){
    console.log(this.state)
    return(
      <div>
        <h1>Movie Bin</h1>
        <NavBar />
        <ListButton onClick={this.toMyList}/>
        <Search onChange={this.onChange} onSubmit={this.onSubmit} value={this.state.query}/>
        <MovieDetails details={this.state.movieDetails}/>
        <iframe src={this.state.trailer} />
        <Twitter tweets={this.state.tweets}/>
      </div>
    )
  }

}

export default Home;
