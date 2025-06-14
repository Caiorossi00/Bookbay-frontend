import React, { useState } from "react";
import Books from "../components/Admin/Books";
import Orders from "../components/Admin/Orders";
import "../assets/styles/AdminDashboard.scss";

const AdminDashboard = () => {
  const [view, setView] = useState("books");

  return (
    <div className="admin-dashboard">
      <nav>
        <button
          className={view === "books" ? "active" : ""}
          onClick={() => setView("books")}
        >
          Livros
        </button>
        <button
          className={view === "orders" ? "active" : ""}
          onClick={() => setView("orders")}
        >
          Pedidos
        </button>
      </nav>

      {view === "books" && <Books />}
      {view === "orders" && <Orders />}
    </div>
  );
};

export default AdminDashboard;
