import React from 'react';
import { FaAlignCenter } from 'react-icons/fa';

const Home = () => {
    return (
        <div
            style={{
                fontFamily: "Gill Sans"
            }}
        >
            <h1>Logan Keener</h1>
            <body class="info-text">
                <div>
                I am a student in my fourth year at <b>University of British Columbia</b> doing Computer Science and a minor in Mathematics!
                </div>
                <br>
                </br>
                <div>

                <b>CURRENTLY:</b> I am finishing up my last semester! Also doing volunteer work for the <b><a href="https://www.artjusticeresearch.org/">A.R.T. Justice project</a></b>, helping create educational material for formerly incarcerated individuals.
                <br></br>

                Work I'm interested in:
                <div style={{
                    marginLeft: '80px'
                }}>
                    <li>
                        Full-stack software development
                    </li>
                    <li>
                        Software testing
                    </li>
                    <li>
                        Database administration
                    </li>
                    <li>
                        Game development
                    </li>
                </div>
                </div>
                <div>
                I am currently looking for a new grad position for January 2025! Check out my projects on this site or view my full resume here:
                    </div>
                <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    paddingTop: '135%'
                }}>
                    <br></br>
                    <iframe style={{
                        width:'70%',
                        position: 'absolute',
                        top: '10px',
                        left: 0,
                        bottom: 0,
                        right: 0,
                        height: '100%'}}
                     src="https://docs.google.com/document/d/e/2PACX-1vRzS6tM8B3VLegzgbeL00dZ3OwJKqtOAm-YdujWtG67xCaXUdnCoS-Q26hARgjpfeaaUMDt8cSghA68/pub?embedded=true" frameborder="60"></iframe>
                </div>
                {/* TODO: would love to make this document toggled by a button/arrow thingy... */}
            </body>
            
        </div>
        // to include on home page:
        // what I'm interested in
    );
};

export default Home;