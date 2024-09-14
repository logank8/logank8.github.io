import React, { useState } from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";




function ContactForm() {
    const [input, setInput] = useState({});

    const inputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: add email submission here
        alert(input);
    }

    return (<form onSubmit={handleSubmit} className="form-text">
        <label>
            Name
            <br></br>
            <input 
            type="text"
            name="name"
            value={input.name || ""}
            onChange={inputChange}
            className="form-input"
            />
        </label>
        <br></br>
        <br></br>
        <label>
            Email
            <br></br>
            <input
            type="text"
            name="email"
            value={input.email || ""}
            onChange={inputChange}
            className="form-input"

            />
        </label>
        <br></br>
        <br></br>
        <label>
            Subject
            <br></br>
            <input
            type="text"
            name="email"
            value={input.subject || ""}
            onChange={inputChange}
            className="form-input"

            />
        </label>
        <br></br>
        <br></br>
        <label>
            Message
            <br></br>
            <textarea
            type="text"
            name="message"
            value={input.message || ""}
            onChange={inputChange}
            className="form-input" 
            style={{height: "150px"}}
            />
            
        </label>
        <br></br>
        <br></br>
        <input type="submit" className="resumeBtn" />
    </form>);

}


const Contact = () => {

    return (
        <div 
            style={{
                fontFamily: "sans-serif",
                display: 'grid',
                width: '100%'
            }}
        >
            <div style={{
                gridColumn: '1',
                marginTop: '5%',
                marginLeft: '10%'
                }}>
                <h2>Contact Form</h2>
                <ContactForm />
            </div>
            <div style={{
                gridColumn: '2',
                textAlign: 'center',
                marginRight: '5%',
                marginTop: "10%",
                maxWidth: "70%"
                }}>
                <h2>Other links:</h2>
                <div style={{display: "grid"}}>
                    <a href="https://github.com/logank8" style={{gridRow: "1"}}><FaGithub size="90px" color="black"/></a>
                    <a href="mailto:lokeener@student.ubc.ca" style={{gridRow: "1"}}><FaEnvelope size="90px" /></a>
                    <a href="https://www.linkedin.com/in/logan-keener-5a5794206/" style={{gridRow: "1"}}><FaLinkedin size="90px" color="darkblue" /></a>
                </div>
            </div>
            
        </div>
    );
    // TODO:
    // connect email.js
    // replace contact buttons with icons using FA
    

};

export default Contact;