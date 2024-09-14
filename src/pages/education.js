import React, {useEffect, useState} from 'react';
import Circle from './Circle/index';
import ReactDOM from 'react-dom';
import { objectTypeCallProperty } from '@babel/types';

function HorizCourseContainer(circles) {
    return <div style={{
        gridColumn: "1",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: 'center',
        padding: "0"
    }}>
        {circles}
    </div>;
    
}


function returnCourses(courses) {
    var circles = [];

    courses.forEach((course) => {
        circles.push(<Circle title={course.title} code={course.code} description={course.description} />);
    });

    var containers = [];

    for (let i = 0; i < circles.length; i++) {
        if (i % 6 === 0) {
            // circles[i, i + 1, i + 2, i + 3, i + 4]
            containers.push(HorizCourseContainer(circles.slice(i, i+6)))
        } else if (circles.length - i < 6) {
            containers.push(HorizCourseContainer(circles.slice(i, circles.length)));
            break;
        }
    }


    return <div style={{
        display: "grid",
        gap: "0",
        padding: "0"
        }}> {containers} </div>;

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
        } else if (((text[i] === ',') || (text[i] === ']')) && (inObj) && (text[i-1] === '}')) {
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
    const [query, setQuery] = useState({});
    // add data points to messages
    

    useEffect(() => { // eventually will have to change this to permanent server host endpoint
    fetch('http://localhost:3306/education/cs-1-f')
      .then((res) => res.text())
      .then((data) => setQuery(data))
      .catch((err) => console.log(err));
  }, []);

    const courses = parseCourses(query.result);

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