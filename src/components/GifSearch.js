import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitHandler(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Search for GIFs"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;