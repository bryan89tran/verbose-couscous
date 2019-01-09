import React, { Component } from 'react';
import GiphyImage from './components/Image/ImgObject';

class App extends Component {

  state = {
    giphy: []
  }

  componentDidMount() {
    this.getGiphy('dog');
  }

  getGiphy(search) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&limit=2`)
      .then(resp => { return resp.json(); })
      .then(json => { return json.data; })
      .then(gifs => {
        return gifs.map(function (gif) {
          return { still: gif.images.fixed_height_still.url, animated: gif.images.fixed_height.url, title: gif.title }
        });
      })
      .then(giphy => {
        this.setState({ giphy })
      })
      .catch(err => {
        console.log(err);
      })
  }

  // handleInput = event => {
  //   event.preventDefault();

  //   const { search } = event.target;

  //   this.getGiphy(search)
  // }

  render() {
    return (
      <div>
        {this.state.giphy.map((gif, i) => {
          return (
            <GiphyImage
              key={i}
              gif={gif}
            />
          )
        })}
      </div>
    );
  }
}

export default App;