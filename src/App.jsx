import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VitrinePage from './pages/Home';
import AdminDashboard from './pages/AdminDashoard';
import AdminPage from './components/Admin/AdminPage';
import NewBook from './components/Admin/NewBook'; // Novo componente para criar livro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VitrinePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/book/new" element={<NewBook />} /> {/* Componente para adicionar um novo livro */}
        <Route path="/admin/book/:id" element={<AdminPage />} /> {/* Componente para editar livro */}
      </Routes>
    </Router>
  );
}

export default App;
