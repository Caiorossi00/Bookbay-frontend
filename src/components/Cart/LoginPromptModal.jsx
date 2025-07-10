import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/LoginPromptModal.scss";

export default function LoginPromptModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, navigate]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="login-modal-content">
        <h2>Login necessário</h2>
        <p>Você precisa fazer login para finalizar a compra.</p>
        <p>Redirecionando para a página de login...</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
