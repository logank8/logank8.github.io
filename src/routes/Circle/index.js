import React, {useEffect, useState} from 'react';
import './Circle.css';




const Circle = (props) => {
    var [expand, setExpand] = useState(true);

    const shrink = () => {
        setExpand(false);
    }
    const grow = () => {
        setExpand(true);
    }

    return (<button className={expand ? "circle-container" : "circle-display"} 
                onClick={expand ? shrink : grow}>

        {expand ?  <br></br> : <></>}
        <b>{props.description}</b>

        <br></br>
        {expand ? <></> : props.code}

        <br></br>
        {expand ? <></>: props.grade}

        </button>
    );


};

export default Circle;