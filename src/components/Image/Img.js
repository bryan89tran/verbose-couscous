import React, { Component } from 'react';

class GiphyImage extends Component {

    constructor(props){
        super(props);
        this.state = {
            giphyState: false,
            src: this.props.still,
            // If props is placed here, It can be accessed by this.state.props.key
            // props,
        }
    }

   componentDidMount(){
        console.log("this.state",this.state);
        console.log("this.props",this.props);
   }
    
    changeImage() {
        if(this.state.giphyState === false){
            this.setState({ src: this.props.animate, giphyState: true})
        } else {
            this.setState({ src: this.props.still, giphyState: false})
        }
    }

    render(){
        return (
            <img 
              src={this.state.src} 
              alt={this.props.title}
              id={this.props.id}
              giphystate={this.state.giphyState.toString()}
              onClick={() => this.changeImage()}
            //   onClick={this.changeImage.bind(this)}
            />
        );
    }
}

export default GiphyImage;
