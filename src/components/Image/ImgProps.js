import React, { Component } from 'react';

class GiphyImage extends Component {

    state = {
        giphyState: false,
        src: '',
        animate: '',
        title: '',
        still: '',
        id: ''
   }

    componentDidMount(){
        const { title, still, animate, id } = this.props;
        this.setState({ still, animate, title, id, src: still });
        console.log("this.state",this.state);
        console.log("this.props",this.props);
    }
    
    changeImage() {
        if(this.state.giphyState === false){
            this.setState({ src: this.state.animate, giphyState: true});
        } else {
            this.setState({ src: this.state.still, giphyState: false});
        }
    }

    render(){
        return (
            <img 
              src={this.state.src} 
              alt={this.state.title}
              id={this.state.id}
              giphystate={this.state.giphyState.toString()}
              onClick={() => this.changeImage()}
            //   onClick={this.changeImage.bind(this)}
            />
        );
    }
}

export default GiphyImage;
