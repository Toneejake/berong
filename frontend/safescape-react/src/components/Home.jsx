import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to SafeScape</h1>
      <p>
        SafeScape is an innovative, AI-driven platform designed to address the critical gap in proactive fire safety education and preparedness.
      </p>
      <p>
        Please select a zone from the navigation bar to get started:
      </p>
      <ul>
        <li><strong>Kids Zone</strong>: Interactive games and quizzes for children</li>
        <li><strong>Adults Zone</strong>: Personalized risk assessments and evacuation plans</li>
        <li><strong>BFP Zone</strong>: Professional tools for Bureau of Fire Protection personnel</li>
      </ul>
    </div>
  );
};

export default Home;
