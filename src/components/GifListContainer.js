import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  fetchGifs = (query) => {
    const apiKey = 'LXOduWeIbEegJZRW11j2TzpXnzB3Jipq';

    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.data.slice(0, 3);
        this.setState({ gifs });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  componentDidMount() {

    this.fetchGifs('initial query');
  }

  render() {
    return (
      <div>
        <GifSearch submitHandler={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;