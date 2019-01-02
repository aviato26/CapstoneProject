import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import './home.css';
import MovieDetails from './details.js';
import Search from './search.js';
import Twitter from './twitter.js';
import ListButton from './listbutton.js';
import NavBar from './navbar.js';
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      movieDetails: [],
      tweets: [],
      trailer: '',
      class: ''
    }
  }

onSubmit = (e) => {
  e.preventDefault();
  axios.post('/home', {
    post: 'get details',
    movieTitle: this.state.query,
  })
  .then(res => {
    let omdb = Object.entries(res.data.omdb).filter((c,i) => i < 10);
    let tweets = Object.entries(res.data.tweets);
    this.setState({
      movieDetails: [...omdb],
      tweets: [...tweets[0][1]],
      trailer: `https://youtube.com/embed/${res.data.youtube.items[0].id.videoId}`,
      class: 'borders'
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
    return(
      <Container fluid>
        <Row>
          <Col className='head'>
            <h1>Movie Bin</h1>
          </Col>
        </Row>
        <Row>
          <Col sm='12' md='2' lg='2' xl='2'>
            <NavBar />
          </Col>
            <Col sm='12' md='5' lg='6' xl='5'>
              <Search onChange={this.onChange} onSubmit={this.onSubmit} value={this.state.query}/>
            </Col>
            <Col sm='12' md='5' lg='4' xl='5'>
              <ListButton onClick={this.toMyList} />
            </Col>
          </Row>
          <Row>
          <Col lg={{size: 4, offset: 2}} md='6' xs='12' className={this.state.class, 'text1'}>
            <MovieDetails details={this.state.movieDetails} />
          </Col>
          <Col lg='6' md='6' xs='12' className={this.state.class, 'text2'} style={{padding: 0}}>
            <iframe src={this.state.trailer} />
          </Col>
          </Row>
        <Row className='tweetpadding text3'>
          <Col lg={{ size: 6, offset: 3 }} xs='12' className={this.state.class}>
            <Twitter tweets={this.state.tweets}/>
          </Col>
        </Row>
      </Container>
    )
  }

}

export default Home;
