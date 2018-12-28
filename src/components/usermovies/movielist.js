import React, {Component} from 'react';
import NavBar from '../main/navbar.js';
import List from './list.js';
import axios from 'axios';

class MovieList extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: []
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

  componentDidMount(props){
    axios('/mylist')
    .then(res => {
      this.setState({
        movies: res.data.map(c => c.title)
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <h1>Movie Bin</h1>
        <NavBar />
        <List movies={this.state.movies} getTitle={this.props.getTitle} removeMovie={this.removeMovie}/>
      </div>
    )
  }
}

export default MovieList;
