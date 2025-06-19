import React from "react";
import "../assets/styles/AcessDenied.scss";

export default function AccessDenied() {
  return (
    <div className="acess-denied">
      <h2>Você não tem acesso a esta página</h2>
      <p>Entre com uma conta de administrador para continuar.</p>
    </div>
  );
}
