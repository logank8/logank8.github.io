import React from 'react';
import { FaAlignCenter } from 'react-icons/fa';
import Card from './Card/index';


function parseRelevantCourses(message) {
    // since the entire thing has apparently been converted to string:
    // we iterate it over similarly to an array of chars, using { and } as signifiers of the beginning and end of an object. 
    // from there we might be able to use JSON.parse



    return message;
};


const Home = (message) => {
    message = parseRelevantCourses(message);
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
                            <b>CURRENTLY:</b> Looking for a new grad position for <b>January 2025</b>!
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
    
            <br></br>
            <br></br>

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
                <Card
                    title="Full-Stack Software Development"
                    info="This is sample info that will later be replaced with something from the database."
                />
                <Card 
                    title="Data Administration and Analysis"
                    info="This is sample info that will later be replaced with something from the database."
                />
               <Card
                    title="Game Development"
                    info="This is sample info that will later be replaced with something from the database."
                />
                
                
            </div>
            
            
            
        </div>
    );
};

export default Home;