import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import VitrinePage from "./pages/Home";
import AdminDashboard from "./pages/AdminDashoard";
import BookForm from "./components/Admin/EditBook";
import NewBook from "./components/Admin/AddBook";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookPage from "./components/BookPage";
import CartPage from "./components/CartPage";
import GenrePage from "./pages/GenrePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VitrinePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/book/new" element={<NewBook />} />
        <Route path="/admin/book/:id" element={<BookForm />} />
        <Route path="/livro/:id" element={<BookPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/genero/:genero" element={<GenrePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
