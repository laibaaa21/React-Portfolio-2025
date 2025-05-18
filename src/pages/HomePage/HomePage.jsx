import React from 'react';

const HomePage = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ color: '#3e653d', textAlign: 'center', marginBottom: '30px' }}>Welcome to My Portfolio</h1>

            <section style={{ marginBottom: '40px' }}>
                <h2>About Me</h2>
                <p>
                    I am a passionate developer with experience in web development. This portfolio showcases my skills,
                    education, and projects I've worked on.
                </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
                <h2>Skills</h2>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', listStyle: 'none', padding: 0 }}>
                    {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'CSS'].map(skill => (
                        <li
                            key={skill}
                            style={{
                                padding: '8px 15px',
                                backgroundColor: '#f5f5f5',
                                borderRadius: '20px',
                                border: '1px solid #ddd'
                            }}
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                        <h3>Portfolio Website</h3>
                        <p>A responsive portfolio website built with React and Node.js</p>
                    </div>
                    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                        <h3>Task Manager</h3>
                        <p>A full-stack task management application with user authentication</p>
                    </div>
                    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                        <h3>E-commerce Platform</h3>
                        <p>An online store with product listings, cart functionality, and payment processing</p>
                    </div>
                </div>
            </section>

            <footer style={{ marginTop: '50px', textAlign: 'center', padding: '20px', borderTop: '1px solid #ddd' }}>
                <p>© 2023 My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage; 