import React, { Component } from 'react';

const API = '/movie';

export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ movies: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { movies, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <ul>
        {movies.map(movie => (
          // Without the `key`, React will fire a key warning
          <React.Fragment key={movie._id}>
            <p>{movie.Title}</p>
            <img src={movie.Poster}/>
          </React.Fragment>
        ))}
      </ul>
    );
  }
}