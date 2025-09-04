import React from 'react';

const AdultsZone = () => {
  // Placeholder function for card clicks
  const handleCardClick = (title) => {
    alert(`You clicked on: ${title}\nThis is a placeholder for the actual feature.`);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#3498db', fontSize: '2.5rem' }}>Adults Zone</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Welcome to the Adults Zone! Here you can assess your household's fire risk and create a personalized evacuation plan.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {/* Risk Assessment Form Card */}
        <div 
          onClick={() => handleCardClick('Risk Assessment Form')} 
          style={{ 
            border: '2px solid #3498db', 
            borderRadius: '12px', 
            padding: '1.5rem', 
            textAlign: 'center', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
          <h3 style={{ color: '#3498db', marginBottom: '1rem' }}>Risk Assessment Form</h3>
          <p>Evaluate your home's fire safety risks with our comprehensive assessment</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#3498db' }}>Start Assessment</span>
          </div>
        </div>

        {/* Personalized Evacuation Plan Card */}
        <div 
          onClick={() => handleCardClick('Personalized Evacuation Plan')} 
          style={{ 
            border: '2px solid #2ecc71', 
            borderRadius: '12px', 
            padding: '1.5rem', 
            textAlign: 'center', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️</div>
          <h3 style={{ color: '#2ecc71', marginBottom: '1rem' }}>Evacuation Plan</h3>
          <p>Get a customized evacuation plan based on your home layout and family needs</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#2ecc71' }}>View Plan</span>
          </div>
        </div>

        {/* "What If?" Scenarios Card */}
        <div 
          onClick={() => handleCardClick('"What If?" Scenarios')} 
          style={{ 
            border: '2px solid #e74c3c', 
            borderRadius: '12px', 
            padding: '1.5rem', 
            textAlign: 'center', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤔</div>
          <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>"What If?" Scenarios</h3>
          <p>Explore different emergency situations and how to respond effectively</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#e74c3c' }}>Explore Scenarios</span>
          </div>
        </div>

        {/* Chatbot Q&A Card */}
        <div 
          onClick={() => handleCardClick('Chatbot Q&A')} 
          style={{ 
            border: '2px solid #9b59b6', 
            borderRadius: '12px', 
            padding: '1.5rem', 
            textAlign: 'center', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
          <h3 style={{ color: '#9b59b6', marginBottom: '1rem' }}>Chatbot Q&A</h3>
          <p>Ask our AI-powered chatbot your fire safety questions anytime</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#9b59b6' }}>Chat Now</span>
          </div>
        </div>

        {/* Fire Safety Checklist Card */}
        <div 
          onClick={() => handleCardClick('Fire Safety Checklist')} 
          style={{ 
            border: '2px solid #f39c12', 
            borderRadius: '12px', 
            padding: '1.5rem', 
            textAlign: 'center', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <h3 style={{ color: '#f39c12', marginBottom: '1rem' }}>Safety Checklist</h3>
          <p>Download and print our comprehensive fire safety checklist</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#f39c12' }}>Download PDF</span>
          </div>
        </div>

        {/* Emergency Kit Planner Card */}
        <div 
          onClick={() => handleCardClick('Emergency Kit Planner')} 
          style={{ 
            border: '2px solid #1abc9c', 
            borderRadius: '12px', 
            padding: '1.5rem', 
            textAlign: 'center', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧰</div>
          <h3 style={{ color: '#1abc9c', marginBottom: '1rem' }}>Emergency Kit Planner</h3>
          <p>Create and customize your family's emergency supply kit</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#1abc9c' }}>Plan Kit</span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
        <h3 style={{ color: '#333', marginBottom: '1rem' }}>More Resources Coming Soon!</h3>
        <p>We're continuously developing new tools and resources to help adults better prepare for fire emergencies.</p>
      </div>
    </div>
  );
};

export default AdultsZone;
