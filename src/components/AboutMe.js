import React from 'react';


function AboutMe() {
    return (
        <div className="about-me">
            <h1>Muhammad Bin Abdul Ganny</h1>
            <h3> Web Developer </h3>
            <div className="links">
                <ul>
                    <li href="https://github.com/yourusername" > GitHub </li>
                    <li href="https://www.linkedin.com/in/yourusername/" > LinkedIn </li>
                    <li href="your-cv.pdf" download> Download CV </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutMe;
