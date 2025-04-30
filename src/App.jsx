import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cabanas from './pages/Cabanas';
import Precios from './pages/Precios';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <Router>
      <header className="p-4 bg-green-700 text-white text-xl font-semibold shadow-md">
        <nav className="flex justify-between">
          <span>Guamúchil Parque Acuático</span>
          <div className="flex gap-4">
            <Link to="/">Inicio</Link>
            <Link to="/cabanas">Cabañas</Link>
            <Link to="/precios">Precios</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </nav>
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabanas" element={<Cabanas />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <footer className="p-4 text-center text-sm text-gray-600">
        © 2025 Guamúchil Parque Acuático
      </footer>
    </Router>
  );
}