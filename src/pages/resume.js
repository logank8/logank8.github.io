import React from 'react';
import { FaCentercode, FaUnderline } from 'react-icons/fa';

const Resume = () => {
    return (
        <body>
            <div
                style={{
                    textAlign: 'center'
                    
                }}
            >
                <h2 
                    style ={{
                        paddingBlock: 0
                }}>
                    Logan Keener (they/he)
                </h2>
                <p 
                    style={{
                        fontSize: 13
                    
                }}>
                    <u>3rd Year UBC Computer Science</u>
                </p>
                
            </div>
            <div 
                style={{
                    paddingLeft: '50px'
            }}>
                <h3>
                    Technical skills
                </h3>
                <p>
                    <strong>Programming:</strong> Python, Java, C/C#/C++, R (currently acquiring)
                </p>
                <p>
                    <strong>Testing: </strong> JUnit, GDB, LLDB
                </p>
                <p>
                    <strong>Web: </strong> HTML5, CSS, Node.js, React.js
                </p>
            </div>
            <div 
                style={{
                    paddingLeft: '50px'
            }}>
                <h3>
                    Technical Project
                </h3>
                <p>
                    <strong>Budget Manager Application</strong> (Jan - May 2022)
                </p>
                <p>
                    <strong>Testing: </strong> JUnit, GDB, LLDB
                </p>
                <p>
                    <strong>Web: </strong> HTML5, CSS, Node.js, React.js
                </p>
            </div>
        </body>
        
    );
};

export default Resume;