import React from 'react';
import './Card.css';


const Card = (props) => {
    const classes = "card";

    return (
        <div className={classes + props.className}>card test</div>
    );
};

export default Card;