# SafeScape

SafeScape is an innovative, AI-driven platform designed to address the critical gap in proactive fire safety education and preparedness. The platform integrates agent-based modeling (ABM) for evacuation simulations and machine learning (ML) for risk assessment to deliver personalized educational content to three distinct user groups: children, general adults, and Bureau of Fire Protection (BFP) professionals.

## Features

### AI Simulation (Mesa)
- Agent-Based Modeling for residential fire evacuations
- Rule-based AI agents representing individuals with family grouping behaviors
- Dynamic pathfinding with A* algorithm
- Hazard avoidance mechanisms for fire and smoke
- Real-time visualization of evacuation scenarios

### Machine Learning Risk Assessment
- Scikit-learn based risk scoring model
- Synthetic data generation for household risk profiles
- Personalized risk assessment for adult users

### Educational Platform (Django/React)
#### Kids Zone
- Interactive games for fire safety education
- Cartoon quizzes and animations
- Age-appropriate content

#### Adults Zone
- Personalized risk assessment forms
- Custom evacuation plans based on simulation results
- "What If?" scenario exploration
- Chatbot Q&A for fire safety questions

#### BFP Professionals Zone
- Scenario builder for custom fire drills
- Analytics dashboard with simulation metrics
- Protocol refreshers and training materials

## Technology Stack

- **Backend**: Django, Django REST Framework, PostgreSQL
- **Frontend**: React, Vite
- **AI/ML**: Mesa (Agent-Based Modeling), Scikit-learn
- **Database**: SQLite (development), PostgreSQL (production)
- **Authentication**: Token-based authentication

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Toneejake/safescape.git
   cd safescape
   ```

2. Set up a virtual environment:
   ```bash
   python -m venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```bash
   python manage.py migrate
   ```

5. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

6. Install frontend dependencies:
   ```bash
   cd frontend/safescape-react
   npm install
   ```

## Running the Application

1. Start the Django backend:
   ```bash
   python manage.py runserver
   ```

2. Start the React frontend (in a separate terminal):
   ```bash
   cd frontend/safescape-react
   npm run dev
   ```

3. Access the application:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000
   - Admin panel: http://localhost:8000/admin

## Project Structure

- `safescape/` - Django project settings and main URLs
- `users/` - User management and authentication
- `education/` - Educational content management
- `frontend/safescape-react/` - React frontend application
- `src/` - Main React components (in root for Vite setup)

## Development

This project is structured in three main phases:

1. **Phase 1**: Foundational Backend and Frontend Setup
2. **Phase 2**: Core Features Development (Simulation, ML, Educational Modules)
3. **Phase 3**: Integration, Testing, and Refinement

## Contributing

This project is developed as part of a Bachelor of Science in Computer Science thesis at Laguna State Polytechnic University.

## License

[MIT License](LICENSE)
