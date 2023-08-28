import React from 'react';

function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skill">
                <h3>Programming Languages</h3>
                <p>JavaScript, Python, Java</p>
            </div>
            <div className="skill">
                <h3>Frontend Development</h3>
                <p>React, HTML, CSS</p>
            </div>
            <div className="skill">
                <h3>Backend Development</h3>
                <p>Node.js, Express</p>
            </div>
            {/* Add more skill categories */}
        </section>
    );
}

export default Skills;
