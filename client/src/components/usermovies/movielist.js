import React, {Component} from 'react';
import NavBar from '../main/navbar.js';
import List from './list.js';
import ModalExample from './modal.js';
import {Container, Col, Row} from 'reactstrap';
import './userStyles.css';
import axios from 'axios';

class MovieList extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      details: [],
      title: '',
      modal: false
    }
  }

  removeMovie = (e, i) => {
    let splicedIndexes = this.state.movies.splice(i,1)
    this.setState({
      movies: this.state.movies
    })
    axios.post('/mylist',{
      title: splicedIndexes
    })
  };

  componentDidMount(){
    axios('/mylist')
    .then(res => {
      this.setState({
        movies: res.data.map(c => c.title)
      })
    })
    .catch(err => console.log(err))
  }

  toggle = (e) => {
    let movieTitle = e.target.textContent;

    axios.post('/details', {
      title: e.target.textContent
    })
    .then(res => {
      let movieData = Object.entries(res.data).filter(c => c[0] !== 'Poster' && c[0] !== 'Ratings' && c[0] !== 'Response')
      this.setState({
        details: [...movieData],
        modal: !this.state.modal,
        title: movieTitle
      })
    })
    .catch(err => console.log(err))
  }

  close = (e) => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render(){
    if(this.state.modal){
      return (
        <ModalExample details={this.state.details} modal={this.state.modal} close={this.close} title={this.state.title}/>
      )
    }
    return(
      <Container fluid className='list-container'>
        <Row>
          <Col lg='12'>
            <h1>Movie Bin</h1>
          </Col>
        </Row>
        <Row>
          <Col sm='2'>
            <NavBar />
            <p className='details'>Click on title for details</p>
          </Col>
        </Row>
        <Row>
          <Col sm='12'>
            <List movies={this.state.movies} toggle={this.toggle} removeMovie={this.removeMovie}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MovieList;
