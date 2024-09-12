import React, {useEffect, useState} from 'react';
import Circle from './Circle/index';
import ReactDOM from 'react-dom';
import { objectTypeCallProperty } from '@babel/types';


function returnCourses(courses) {
    let container = <div></div>;
    var circles = [];

    courses.forEach((course) => {
        circles.push(<Circle title={course.title} code={course.code} description={course.description} />);
    });

    return <div style={{
        marginLeft: "8%",
        display: "grid",
        gridTemplateColumns: "15% 15% 15% 15% 15% 15%"
    }}>{circles}</div>;

};

// since the entire thing has apparently been converted to string:
// we iterate it over similarly to an array of chars, using { and } as signifiers of the beginning and end of an object. 
// from there we might be able to use JSON.parse

function parseCourses(data) {
    const text = String(data);
    // return an array of JSON objects
    var courseObjects = [];

    var inObj = false;
    let objtext = "";
    for (let i = 0; i < text.length; i++) {
        if ((text[i] === '[') || (text[i] === '[')) {
            continue;
        } 
        if ((text[i] === '{') && (!inObj)) {
            inObj = true;
            objtext = objtext.concat(text[i]);
        } else if ((text[i] === ',') && (inObj) && (text[i-1] === '}')) {
            const obj = JSON.parse(objtext);
            obj['code'] = obj['CONCAT(`dept`, `code`)'];
            delete obj['CONCAT(`dept`, `code`)'];
            courseObjects.push(obj);
            inObj = false;
            objtext = "";
        } else if (inObj) {
            objtext = objtext.concat(text[i]);
        }
    }

    return courseObjects;
};


const Education = () => {
    const [message, setMessage] = useState('');
    useEffect(() => { // eventually will have to change this to permanent server host endpoint
    fetch('http://localhost:3306/education')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);

    const courses = parseCourses(message);

    return (
        <div 
            style={{
                fontFamily: 'serif'
            }}
        >
            {returnCourses(courses)}
        </div>
    );
    // TODO:
    // specify circle container in here
    // parse db response and display
};

export default Education;