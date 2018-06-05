import React from "react";

const GiphyImage = props => (
    <img 
     id={props.id}
     src={props.still}
     still={props.still}
     animated={props.animated}
     alt={props.title}
     onClick={() => 
        props.onClick({
            src: props.still,
            still: props.still,
            animated: props.animated,
            id: props.id
        })}
    />
);

export default GiphyImage;