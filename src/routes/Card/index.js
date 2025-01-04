import React, {useEffect, useState} from 'react';
import './Card.css';



const Card = (props) => {
    var [front, setFront] = useState(true);
    

    const frontToBack = () => {
        setFront(false);
    };
    const backToFront = () => {
        setFront(true);
    };

    let cardText;
    let button;

    

    if (front) {
        cardText = (<div className="cardTitle" style={{
            textAlign: "center",
            marginInline: "10%",
            height: "120px",
            marginTop: "10%"
        }}>
            {props.title}
            </div>);
        button = <button className="card-button" onClick={frontToBack}><b>LEARN MORE</b></button>;
    } else {
        cardText = <div style={{
            textAlign: "center",
            marginInline: "10%",
            height: "120px",
            marginTop: "10%"
        }}> relevant courses: {props.info} </div>;
        button = <button className="card-button" onClick={backToFront}><b>CLOSE</b></button>;
    }

    return (
        <div className="card">
            {cardText}
            <div style={{
            textAlign: "center",
            height: "20%",
        }}>
                {button}
            </div>
            
        </div>
    );
};

export default Card;