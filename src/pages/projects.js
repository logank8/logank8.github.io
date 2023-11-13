import React from 'react';

const Projects = () => {
    return (
        <div class="row" style={{
            fontFamily: 'serif'
        }}
        >
            <div class="column">
                <h2>
                    my past work
                </h2>
                <div>
                    CPSC 304 Database Schema and Interface
                </div>
                <div>
                    Waitlist Tracker bot
                </div>
                <div>
                    Song Popularity Predictor
                </div>
                <div>
                    UBC REX Undergraduate Research Experience Program
                </div>
                <div>
                    CPSC 310 UBC Pair Data API
                </div>
                <div>
                    Node.js webscraper template
                </div>
                <div>
                    CPSC 210 Budget Manager Application
                </div>
                
            </div>
            <div class="column">
            <h2>
                    my education history
                </h2>
                <body class="info-text">
                    I spent my first year of university at <a href="https://simons-rock.edu/">Bard College at Simon's Rock</a>:
                    <br></br>
                    
                    <img src="./images/IMG_0331.JPG" alt="Bard College at Simon's Rock" width="500" height="333">
                    </img>
                    

                    Then I transferred to UBC Vancouver to major in Computer Science and minor in Mathematics!
                    <br></br>
                    <br></br>
                    I finished my 3rd year in May 2023; I'm intending on taking 12 months off for co-op positions and then graduating <b>May 2025</b>.
                </body>
            </div>
        </div>
        
    );
};

export default Projects;