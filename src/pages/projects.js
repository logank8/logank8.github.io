import React from 'react';
import bardpic from './images/IMG_0331.JPG';
import vanpic from './images/Van.png';

const Projects = () => {
    // TODO: create accordion display with summary for each project including tech used, major learning points, major setbacks, and pictures of product
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
                    
                    <img class='pic1' src={bardpic
                } alt="Bard College at Simon's Rock">
                    </img>
                    
                    <br></br>
                    Then I transferred to <a href="https://ubc.ca/">UBC Vancouver</a> to major in Computer Science and minor in Mathematics!
                    
                    <br></br>
                    <img style={{marginLeft:'50%'}} class='pic1' src={vanpic
                } alt="Vancouver">
                    </img>
                    <br></br>
                    I finished my 3rd year in May 2023; I'm intending on taking 12 months off for co-op positions and then graduating <b>May 2025</b>.
                </body>
            </div>
        </div>
        
    );
};

export default Projects;