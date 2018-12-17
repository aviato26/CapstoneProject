import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
  }

onSubmit = (e) => {
  e.preventDefault();
  this.setState({
    query: ''
  })
}

onChange = (e) => {
  this.setState({
    query: e.target.value
  })
}

  render(){
    return(
      <div>
        <h1>Movie Bin</h1>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.query} onChange={this.onChange}></input>
          <button></button>
        </form>
      </div>
    )
  }

}

export default Home;
