import React from 'react';
import { FaAlignCenter } from 'react-icons/fa';
import computerImg from './images/computer_clipart.png';
import Card from './Card/index';

const Home = (message) => {
    console.log(message);
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
                        A student in at <b>University of British Columbia</b> studying Computer Science and a minor in Mathematics
                    
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
                <>Work I'm interested in: </>
                <br></br>
                <br></br>
                <ul>
                    <li>Full-stack software development</li>
                    <li>Data administration and analysis</li>
                    <li>Game development</li>
                </ul>


                
            </div>

            <br></br>
            <br></br>

            <Card
                className={["info-text"]}
            />
            
            
        </div>
        // to include on home page:
        // work im interested in - interactive cards
    );
};

export default Home;