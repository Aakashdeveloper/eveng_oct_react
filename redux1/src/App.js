import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

import './App.css';

class App extends Component {

  componentWillMount(){
    this.props.moviesList()
  }

  renderList = (movies) => {
    if(movies)
    return movies.map((data) => {
      return(
        <div>{data.name}</div>
      )
    })
  }
  render() {
    return (
      <div>
        {this.renderList(this.props.movies)}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies:state.movies
  }
}

export default connect(mapStateToProps, actions)(App);
