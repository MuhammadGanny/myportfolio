import React from 'react';


function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3>Portfolio Website</h3>
                <p>A showcase of my skills and projects using React.</p>
                <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="project">
                <h3>E-commerce App</h3>
                <p>Developed an online store using React and Redux.</p>
                <a href="https://github.com/yourusername/e-commerce-app" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            {/* Add more project entries */}
        </section>
    );
}

export default Projects;
