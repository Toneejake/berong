# SafeScape Frontend

This is the frontend for the SafeScape application, built with React and Vite.

## Project Structure

```
src/
  ├── components/
  │   ├── adults/       # Adults Zone components
  │   ├── bfp/           # BFP Zone components
  │   ├── kids/          # Kids Zone components
  │   ├── Home.jsx       # Home/Landing page component
  │   └── Navbar.jsx     # Navigation component
  ├── App.jsx            # Main App component with routing
  ├── main.jsx           # Entry point
  └── index.css          # Global styles
```

## Available Zones

1. **Kids Zone** - Interactive games and quizzes for children
2. **Adults Zone** - Personalized risk assessments and evacuation plans for adults
3. **BFP Zone** - Professional tools for Bureau of Fire Protection personnel

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend/safescape-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173`

### Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Development

This project uses:
- React for building user interfaces
- Vite for fast development and building
- React Router for navigation
- CSS for styling

## Contributing

This project is part of a Bachelor of Science in Computer Science thesis at Laguna State Polytechnic University.
