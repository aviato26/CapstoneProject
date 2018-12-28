import React, {Component} from 'react';
import NavBar from '../main/navbar.js';
import List from './list.js';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import axios from 'axios';

class MovieList extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: ['aquaman', 'sam'],
      title: '',
      movieDetails: [],
      model: false,
      backdrop: true
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
    this.setState({
      modal: !this.state.modal,
      title: e.target.textContent
    });
  }

  changeBackdrop = (e) => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  getAllDetails = (e) => {
    axios.post('mylist')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <h1>Movie Bin</h1>
        <NavBar />
        <List movies={this.state.movies} getTitle={this.props.getTitle} toggle={this.toggle} removeMovie={this.removeMovie}/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
       <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
       <ModalBody>
         {this.state.title}
       </ModalBody>
       <ModalFooter>
         <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
       </ModalFooter>
     </Modal>
      </div>
    )
  }
}

export default MovieList;
