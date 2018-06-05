import React, { Component } from 'react';
import GiphyImage from './components/Image/ImgFunction'

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

  //   alert(event.target.id);
     

  //   // this.getGiphy(search)
  // }

  changeGif = (giphy) => {

    console.log(giphy)

    var arrayIndex = giphy.id;
    var grabArray = this.state.giphy;

    if (giphy.src === grabArray[arrayIndex].still){
      
      let temp = grabArray[arrayIndex].still
      grabArray[arrayIndex].still = giphy.animated;
      grabArray[arrayIndex].animated = temp;
      this.setState({ giphy: grabArray })
    } 
    else {
      
      let temp = grabArray[arrayIndex].animated
      grabArray[arrayIndex].animated = giphy.still;
      grabArray[arrayIndex].still = temp;
      this.setState({ giphy: grabArray })
    }

  }

  render() {
    return (
      <div>
        {this.state.giphy.map((gif, i) => {
          return (
            <GiphyImage
              key={i}
              id={i}
              still={gif.still}
              animated={gif.animated}
              title={gif.title}
              onClick={this.changeGif}
            />
          )
        })}
      </div>
    );
  }
}

export default App;