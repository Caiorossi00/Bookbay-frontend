import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VitrinePage from "./pages/Home";
import AdminDashboard from "./pages/AdminDashoard";
import AdminPage from "./components/Admin/AdminPage";
import NewBook from "./components/Admin/NewBook";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VitrinePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/book/new" element={<NewBook />} />
        <Route path="/admin/book/:id" element={<AdminPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
