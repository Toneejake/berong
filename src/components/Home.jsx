import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '1rem' }}>Welcome to SafeScape</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          An innovative, AI-driven platform designed to address the critical gap in proactive fire safety education and preparedness.
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '2rem' }}>Our Mission</h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
          SafeScape empowers communities with personalized fire safety education through advanced AI simulations, 
          machine learning risk assessments, and interactive learning modules tailored for different user groups.
        </p>
      </section>

      <section>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '2rem' }}>Explore Our Zones</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#e74c3c' }}>Kids Zone</h3>
            <p>Interactive games and quizzes for children</p>
            <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
              <li>Spot the Hazard Game</li>
              <li>Fire Safety Quiz</li>
              <li>Evacuation Animation</li>
            </ul>
          </div>
          
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#3498db' }}>Adults Zone</h3>
            <p>Personalized risk assessments and evacuation plans</p>
            <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
              <li>Risk Assessment Form</li>
              <li>Personalized Evacuation Plan</li>
              <li>"What If?" Scenarios</li>
              <li>Chatbot Q&A</li>
            </ul>
          </div>
          
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#2ecc71' }}>BFP Zone</h3>
            <p>Professional tools for Bureau of Fire Protection personnel</p>
            <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
              <li>Scenario Builder</li>
              <li>Analytics Dashboard</li>
              <li>Protocol Refreshers</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Navigate using the menu above to explore each zone and discover how SafeScape can enhance fire safety education and preparedness.
        </p>
      </section>
    </div>
  );
};

export default Home;
