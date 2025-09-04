import React from 'react';

const KidsZone = () => {
  // Placeholder function for card clicks
  const handleCardClick = (title) => {
    alert(`You clicked on: ${title}\nThis is a placeholder for the actual feature.`);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#e74c3c', fontSize: '2.5rem' }}>Kids Zone</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Welcome to the Kids Zone! Here you'll find interactive games and quizzes to help you learn about fire safety in a fun way.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {/* Spot the Hazard Game Card */}
        <div 
          onClick={() => handleCardClick('Spot the Hazard Game')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>Spot the Hazard Game</h3>
          <p>Can you find all the fire hazards in this room?</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#e74c3c' }}>Play Game</span>
          </div>
        </div>

        {/* Fire Safety Quiz Card */}
        <div 
          onClick={() => handleCardClick('Fire Safety Quiz')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❓</div>
          <h3 style={{ color: '#3498db', marginBottom: '1rem' }}>Fire Safety Quiz</h3>
          <p>Test your knowledge with our fun fire safety quiz!</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#3498db' }}>Take Quiz</span>
          </div>
        </div>

        {/* Evacuation Animation Card */}
        <div 
          onClick={() => handleCardClick('Evacuation Animation')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏃</div>
          <h3 style={{ color: '#2ecc71', marginBottom: '1rem' }}>Evacuation Animation</h3>
          <p>Watch how to safely evacuate during a fire emergency</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#2ecc71' }}>Watch Video</span>
          </div>
        </div>

        {/* Fire Safety Songs Card */}
        <div 
          onClick={() => handleCardClick('Fire Safety Songs')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎵</div>
          <h3 style={{ color: '#f39c12', marginBottom: '1rem' }}>Fire Safety Songs</h3>
          <p>Sing along to catchy tunes that teach fire safety</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#f39c12' }}>Listen & Learn</span>
          </div>
        </div>

        {/* Coloring Book Card */}
        <div 
          onClick={() => handleCardClick('Fire Safety Coloring Book')} 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖍️</div>
          <h3 style={{ color: '#9b59b6', marginBottom: '1rem' }}>Coloring Book</h3>
          <p>Print and color fun fire safety scenes</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#9b59b6' }}>Download & Print</span>
          </div>
        </div>

        {/* Emergency Contacts Card */}
        <div 
          onClick={() => handleCardClick('Emergency Contacts')} 
          style={{ 
            border: '2px solid #e67e22', 
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
          <h3 style={{ color: '#e67e22', marginBottom: '1rem' }}>Emergency Contacts</h3>
          <p>Learn who to call and when during emergencies</p>
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#e67e22' }}>View Numbers</span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
        <h3 style={{ color: '#333', marginBottom: '1rem' }}>More Activities Coming Soon!</h3>
        <p>We're constantly adding new games, activities, and educational content to make learning about fire safety fun and engaging.</p>
      </div>
    </div>
  );
};

export default KidsZone;
