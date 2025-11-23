import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Opener from './components/Opener/Opener';

function App() {
  return (
    <Router>
      <main className="w-full h-full">
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<Opener />} />

          {/* Catch-all route to redirect any invalid paths */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
