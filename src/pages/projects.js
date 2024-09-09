import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import bardpic from './images/IMG_0331.JPG';
import vanpic from './images/Van.png';
import rexpic1 from './images/introrex.png';
import rexpic2 from './images/statmethodsrex.png';
import rexpic3 from './images/pupillometryrex.png';

const Projects = () => {

    // setting up accordion display
    const items = [];

    const proj304 = {
        uuid: 1,
        heading: "CPSC 304 Database Schema and Interface",
        content: "I worked with 1 other teammate to create a basic relational database reflecting a social media administration system and connected interface through which a user could perform various queries. We began by outlining an ER Diagram and relational schema for the database and building a SQL initialization script to reflect the schema. I created interactive components with React.js to take user input for different values of a query. We also came up with various types of SQL queries and connected them from the GUI to the database with Express routing to REST API interactions.<br></br> I found this to be a really great experience to learn more about SQL and the way a database is designed. I was able to fill a lot of gaps in my knowledge about REST APIs as well, since this was my second time working with it! I'd love to take CPSC 404 in the next term and learn more relational databases. <br></br> <br></br> Github repository link <a href='https://github.com/logank8/304-database-project'>here</a>!"
    };
    items.push(proj304);
    return (
        <div class="row" style={{
            fontFamily: "Gill Sans"
        }}
        >
            <div class="column">
                <h2>
                    my past work
                </h2>
                <Accordion allowZeroExpanded>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            CPSC 304 Database Schema and Interface
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <body>
                                I worked with 1 other teammate to create a basic relational database reflecting a social media administration system and connected interface through which a user could perform various queries. 
                                We began by outlining an ER Diagram and relational schema for the database and building a SQL initialization script to reflect the schema. I created interactive components with React.js to take user input for different values of a query. 
                                We also came up with various types of SQL queries and connected them from the GUI to the database with Express routing to REST API interactions.
                                <br></br> 
                                I found this to be a really great experience to learn more about SQL and the way a database is designed. I was able to fill a lot of gaps in my knowledge about REST APIs as well, since this was my second time working with it! 
                                I'd love to take CPSC 404 in the next term and learn more relational databases. 
                                <br></br> 
                                <br></br> 
                                Github repository link <a href='https://github.com/logank8/304-database-project'>here</a>!
                                </body>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Waitlist Tracker bot
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                        <body>
                        This is a script I wrote with Python, Discord.py, and Selenium to check a few different UBC courses. 
                        I've been wanting to work with Selenium for a while now, and this was a great great chance. 
                        And of course, I always love Python.
                        <br></br>
                        It would be great to do some more automation stuff in the future!!
                        <br></br>
                        Github repository link <a href="https://github.com/logank8/waitlist-bot-script">here</a>!
                        </body>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Song Popularity Predictor
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                        <body>
                        This is by far my favorite project I've done, and I keep wanting to come back to it and do more. I made a machine learning model using a Random Forest algorithm with the scikit Python library and some synthetic data from Kaggle.
                        I made a little web app in Flask to demonstrate it, and used the Tekore.py library to gather some more data for an interactive search-and-test component. 
                        One thing that I would love to do now is write a Python automation script to gather some mass of data from the Tekore library and then create test and train datasets off of that, because the Kaggle data wasn't as accurate as I would've liked (and the Tekore library definitely is).
                        As it stands, though, I'm still proud of what I've done with it because I always love Random Forest models.
                        <br></br>
                        Github repository link <a href="https://github.com/logank8/flask-model">here</a>!
                        </body>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            UBC REX Undergraduate Research Experience Program
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                        <body>
                        I worked with three others under a mentor from the UBC Linguistics department to create an evaluation of a Text-To-Speech system for Ojibwe, using an eye-tracking system to measure pupillometry. 
                        We met weekly and I got to learn a ton about the research process (writing literature reviews, abstracts, etc.) and statistical analysis used in the research process.
                        In March 2023, we presented a hypothetical study and its relevance with the team at the UBC MURC (Multidisciplinary Undergraduate Research Conference). I had such a great time and got to meet a lot of great people!

                        Some clips from our presentation:
                        <br></br>
                        
                        <img src={rexpic1} alt="REX" width='50%' style={{margin:'0px 10px'}}></img>
                        <img src={rexpic3} alt="REX" width='50%' style={{margin:'0px 10px'}}></img>
                        <img src={rexpic2} alt="REX" width='50%' style={{margin:'0px 10px'}}></img>
                        
                        </body>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            CPSC 310 UBC Pair Data API
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                        <body>
                        Me and a partner developed a query engine in TypeScript for the UBC PAIR dataset, created a RESTful API connected to the query engine, and then wrote a simple frontend to connect to and display it.
                        Although it was super super arduous, I feel like this class actually taught me a lot about the value of testing your code, and about all the different types of tests you can add to a test suite. 
                        We got to do glass box testing and black box testing, which was fun. 
                        <br></br>
                        All the tech tools we used: TypeScript, JavaScript, HTML, CSS, mocha.ts, Express, Postman
                        <br></br>
                        Project demo <a href="https://drive.google.com/drive/folders/15rXVJ38zvVF2wrSaxeGKHLRKW52RLJc-?usp=share_link">here</a>!
                        </body>
                        </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                Node.js webscraper
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <body>
                            The purpose of creating this was to provide a model of how to scrape the UBC course listing website at each level (so others can adapt it efficiently and use it for their own purposes 😉)
                            <br></br>

        I originally had attempted to do the html navigation with Python's Selenium library, but later found that the node.js Puppeteer library is much better for these purposes!
                            <br></br>
        ** do NOT run this, it takes up a lot of memory; I am currently working on changing it to write to a csv which will likely take less memory space !! The script can be used/copied for personal use though. I am not endorsing using this for any sort of automated enrollment as I'm pretty sure that is extremely not allowed!!!! However...if someone wanted to use my code for that, that's none of my business.
                            <br></br>
                            Github repository link <a href="https://github.com/logank8/ubc-webscrape">here</a>!
                            </body>
                            </AccordionItemPanel>
                        </AccordionItem>
                        
                </Accordion>
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