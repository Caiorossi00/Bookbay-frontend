import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../assets/styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <h1 className="logo-footer">Bookbay</h1>
          </div>
          <div className="footer-address">
            <div>Jaguarão, RS - 96300-000</div>
            <div>Brasil</div>
          </div>
          <div className="footer-contacts">
            <div className="footer-contact-item">
              <span className="contact-label">Telefone</span>
              <div className="contact-value">
                <FiPhone size={16} />
                +55 (53) 98415-8694
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="contact-label">Email</span>
              <div className="contact-value">
                <FiMail size={16} />
                caiorossi.code@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <h4>Links Úteis</h4>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/carrinho">Carrinho</Link>
              </li>
              <li>
                <Link to="/pedidos">Meus Pedidos</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social</h4>
            <ul>
              <li>
                <a
                  href="https://instagram.com/caiorossi.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/caio-rossi-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Caiorossi00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/termos-de-serviço">Termos de Serviço</Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">© Desenvolvido por Caio Rossi.</div>
    </footer>
  );
};

export default Footer;
