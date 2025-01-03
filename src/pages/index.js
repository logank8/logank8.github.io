import { getByTitle } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { FaAlignCenter } from 'react-icons/fa';
import Card from './Card/index';

const relevantFields = ['Full Stack Software Development', 'Data Administration and Analysis', 'Game Development'];


// should probably add more guards to this function or maybe error catching on JSON parse

function parseRelevantCourses(message) {
    // just to confirm that it is a string
    const text = String(message);
    // return an array of JSON objects
    var courseObjects = [];

    var inObj = false;
    let objtext = "";
    for (let i = 1; i < text.length; i++) {
        if ((text[i] === '{') && (!inObj)) {
            inObj = true;
            objtext = objtext.concat(text[i]);
        } else if (((text[i] === ',') || (text[i] === ']')) && (inObj) && (text[i-1] === '}')) {
            const obj = JSON.parse(objtext);
            obj['course'] = obj['JSON_ARRAYAGG(`description`)'];
            delete obj['JSON_ARRAYAGG(`description`)'];
            courseObjects.push(obj);
            inObj = false;
            objtext = "";
        } else if (inObj) {
            objtext = objtext.concat(text[i]);
        }
    }


    return courseObjects;
};

function makeFieldCard(title, info) {    

    return <Card title={title} info={info.join()} />
};

const Home = () => {
    const [message, setMessage] = useState('');
    useEffect(() => { // eventually will have to change this to permanent server host endpoint
    fetch('http://localhost:3306/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
    }, []);

    const courses = parseRelevantCourses(message);

    // message should be an array of objects
    const makeCards = () => {
        if (courses.length === 0) {
            return <></>;
        }
        const fieldsObj = {};

        const result = [];

        for (let i = 0; i < relevantFields.length; i++) {
            
            const courseMatch = courses.find((course) => {
                if (course === undefined) {
                    return false;
                } else {
                    const field = course.relevantField;
                    return field.toUpperCase() === relevantFields[i].toUpperCase();
                }
                
            });

            fieldsObj[relevantFields[i].toUpperCase()] = courseMatch.course;
            

            result.push(makeFieldCard(relevantFields[i], fieldsObj[relevantFields[i].toUpperCase()]));
        }

        return result;
    };


    // for every relevant field: filter courses

    return (
        <div
            style={{
                fontFamily: "Gill Sans"
            }}
        >
            <div className="row">
                <div className="column">
                    
                    <div className="info-text">
                        <h1>Logan Keener</h1>
                        Student at <b>University of British Columbia</b> studying Computer Science and a minor in Mathematics
                    
                        <br></br>
                        <br></br>

                        <>
                            <b>CURRENTLY:</b> Looking for a new grad position for <b>May 2025</b>!
                        </>

                        <br></br>
                        <br></br>

                        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:fc77482d-0ca3-41e3-b4cd-155985d5676e" target="_blank">
                            <button className="resumeBtn">DOWNLOAD MY RESUME</button>
                        </a>
                    </div>
                </div>
                
                <div className="column">
                    <img className="home-image" src={require('./images/computer_clipart.png')} />  
                </div>
            </div>
    

            <div className="info-text">
                <>WORK I'M INTERESTED IN: </>
            </div>

            <br></br>
            <br></br>


            <div style={{
                display: "flex",
                flexDirection: "row",
                marginRight: "5%"
            }}>
                {courses.length === 0 ? null : makeCards()}
                
                
            </div>
            
            
            
        </div>
    );
};

export default Home;