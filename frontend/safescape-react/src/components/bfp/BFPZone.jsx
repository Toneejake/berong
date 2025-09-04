import React from 'react';

const BFPZone = () => {
  // Placeholder function for card clicks
  const handleCardClick = (title) => {
    alert(`You clicked on: ${title}\nThis is a placeholder for the actual feature.`);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#2ecc71', fontSize: '2.5rem' }}>BFP Professionals Zone</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Welcome to the BFP Professionals Zone! Here you'll find advanced tools to help with training, analysis, and emergency preparedness.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {/* Scenario Builder Card */}
        <div 
          onClick={() => handleCardClick('Scenario Builder')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏗️</div>
          <h3 style={{ color: '#2ecc71', marginBottom: '1rem' }}>Scenario Builder</h3>
          <p>Create custom fire emergency scenarios for training exercises</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#2ecc71' }}>Build Scenario</span>
          </div>
        </div>

        {/* Analytics Dashboard Card */}
        <div 
          onClick={() => handleCardClick('Analytics Dashboard')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
          <h3 style={{ color: '#9b59b6', marginBottom: '1rem' }}>Analytics Dashboard</h3>
          <p>Analyze simulation data and training exercise results</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#9b59b6' }}>View Analytics</span>
          </div>
        </div>

        {/* Protocol Refreshers Card */}
        <div 
          onClick={() => handleCardClick('Protocol Refreshers')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
          <h3 style={{ color: '#f39c12', marginBottom: '1rem' }}>Protocol Refreshers</h3>
          <p>Access quick-reference guides for standard BFP procedures</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#f39c12' }}>Review Protocols</span>
          </div>
        </div>

        {/* Training Module Creator Card */}
        <div 
          onClick={() => handleCardClick('Training Module Creator')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
          <h3 style={{ color: '#3498db', marginBottom: '1rem' }}>Training Module Creator</h3>
          <p>Design and customize training modules for different audiences</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#3498db' }}>Create Module</span>
          </div>
        </div>

        {/* Incident Report Analyzer Card */}
        <div 
          onClick={() => handleCardClick('Incident Report Analyzer')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
          <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>Incident Report Analyzer</h3>
          <p>Analyze past incidents to identify patterns and improve response strategies</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#e74c3c' }}>Analyze Reports</span>
          </div>
        </div>

        {/* Resource Library Card */}
        <div 
          onClick={() => handleCardClick('Resource Library')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📂</div>
          <h3 style={{ color: '#1abc9c', marginBottom: '1rem' }}>Resource Library</h3>
          <p>Access forms, templates, guidelines, and reference materials</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#1abc9c' }}>Browse Resources</span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
        <h3 style={{ color: '#333', marginBottom: '1rem' }}>Additional Tools Coming Soon!</h3>
        <p>We're continuously developing new professional tools to support BFP personnel in their critical work.</p>
      </div>
    </div>
  );
};

export default BFPZone;
