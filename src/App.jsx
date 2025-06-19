import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import VitrinePage from "./pages/Home";
import AdminDashboard from "./pages/AdminDashoard";
import BookForm from "./components/Admin/EditBook";
import NewBook from "./components/Admin/AddBook";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";
import GenrePage from "./pages/GenrePage";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pedidos from "./components/MyOrders";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VitrinePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/book/new"
          element={
            <PrivateRoute>
              <NewBook />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/book/:id"
          element={
            <PrivateRoute>
              <BookForm />
            </PrivateRoute>
          }
        />
        <Route path="/livro/:id" element={<BookPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/genero/:genero" element={<GenrePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
