# SafeScape

SafeScape is an innovative, AI-driven platform designed to address the critical gap in proactive fire safety education and preparedness. The platform integrates agent-based modeling (ABM) for evacuation simulations and machine learning (ML) for risk assessment to deliver personalized educational content to three distinct user groups: children, general adults, and Bureau of Fire Protection (BFP) professionals.

## Project Structure

- `safescape/` - Django project settings and main URLs
- `users/` - User management and authentication
- `education/` - Educational content management
- `frontend/safescape-react/` - React frontend application
- `src/` - Main React components (in root for Vite setup)

## Technology Stack

- **Backend**: Django, Django REST Framework, PostgreSQL
- **Frontend**: React, Vite
- **AI/ML**: Mesa (Agent-Based Modeling), Scikit-learn
- **Database**: SQLite (development), PostgreSQL (production)
- **Authentication**: Token-based authentication

## Quick Start

### Backend Setup

1. Set up a virtual environment:
   ```bash
   python -m venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up the database:
   ```bash
   python manage.py migrate
   ```

4. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

5. Start the Django backend:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend/safescape-react
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React frontend:
   ```bash
   npm run dev
   ```

### Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- Admin panel: http://localhost:8000/admin

## Development Phases

This project is structured in three main phases:

1. **Phase 1**: Foundational Backend and Frontend Setup *(COMPLETED)*
2. **Phase 2**: Core Features Development (Simulation, ML, Educational Modules)
3. **Phase 3**: Integration, Testing, and Refinement

## Contributing

This project is developed as part of a Bachelor of Science in Computer Science thesis at Laguna State Polytechnic University.

For detailed information about the frontend, see [frontend/safescape-react/README.md](frontend/safescape-react/README.md).
