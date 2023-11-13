import React from 'react';
import { FaAlignCenter } from 'react-icons/fa';

const Home = () => {
    return (
        <div
            style={{
                fontFamily: 'Times New Roman'
            }}
        >
            <h1>hiiiii !</h1>
            <body class="info-text">
                <div>
                My name is <b>Logan Keener</b> (they/them), I'm a student in my fourth year at <b>UBC</b> doing Computer Science and Math among other coooool things :3
                </div>
                <br>
                </br>
                <div>

                <b>CURRENTLY:</b> I am taking a break from school for a co-op term! Also doing volunteer work for the <b><a href="https://www.artjusticeresearch.org/">A.R.T. Justice project</a></b>, helping create educational material for formerly incarcerated individuals.

                When I am in school, I'm interested in:
                <div style={{
                    marginLeft: '80px'
                }}>
                    <li>
                        Machine learning & data analytics
                    </li>
                    <li>
                        UX accessibility
                    </li>
                    <li>
                        Queer inclusion in tech
                    </li>
                    <li>
                        Ethical AI
                    </li>
                </div>
                </div>
                <div>
                I am currently looking for another co-op position for January-May/August 2024! Check out my projects on this site or view my full resume here:
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
            </body>
            
        </div>
        // to include on home page:
        // what I'm interested in
    );
};

export default Home;