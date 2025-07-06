import React from "react";
import "../assets/styles/PrivacyPolicy.scss";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Política de Privacidade – Bookbay</h1>
        <p className="last-updated">
          <strong>Última atualização:</strong> 06 de julho de 2025
        </p>

        <section>
          <h2>1. Introdução</h2>
          <p>
            Na Bookbay, a sua privacidade é muito importante para nós. Esta
            Política de Privacidade explica como coletamos, usamos, armazenamos
            e protegemos suas informações pessoais quando você utiliza nosso
            site e serviços.
          </p>
        </section>

        <section>
          <h2>2. Informações que coletamos</h2>
          <p>
            Podemos coletar diferentes tipos de informações para melhorar sua
            experiência:
          </p>
          <ul>
            <li>
              <strong>Informações fornecidas por você:</strong> Nome, e-mail,
              endereço, telefone, dados de pagamento e outras informações
              fornecidas durante o cadastro ou compra.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Como usamos suas informações</h2>
          <p>Usamos suas informações para:</p>
          <ul>
            <li>Processar suas compras e pedidos;</li>
            <li>Oferecer suporte e atendimento ao cliente;</li>
            <li>Enviar atualizações, promoções e comunicados;</li>
            <li>Personalizar e melhorar nossos serviços;</li>
            <li>Cumprir obrigações legais e prevenir fraudes.</li>
          </ul>
        </section>

        <section>
          <h2>4. Compartilhamento de informações</h2>
          <p>
            Não vendemos suas informações pessoais a terceiros. Podemos
            compartilhar dados com parceiros confiáveis que auxiliam na operação
            do site, como serviços de pagamento e logística, sempre respeitando
            a confidencialidade e segurança.
          </p>
        </section>

        <section>
          <h2>5. Segurança dos dados</h2>
          <p>
            Adotamos medidas técnicas e administrativas para proteger suas
            informações contra acessos não autorizados, perda, alteração ou
            divulgação indevida.
          </p>
        </section>

        <section>
          <h2>6. Seus direitos</h2>
          <p>
            Você tem o direito de acessar, corrigir, atualizar ou excluir suas
            informações pessoais. Também pode optar por não receber comunicações
            promocionais a qualquer momento.
          </p>
        </section>

        <section>
          <h2>7. Cookies</h2>
          <p>
            Nosso site utiliza cookies para melhorar sua navegação e oferecer
            uma experiência personalizada. Você pode gerenciar suas preferências
            de cookies no seu navegador.
          </p>
        </section>

        <section>
          <h2>8. Alterações nesta política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade ocasionalmente.
            Recomendamos que revise esta página regularmente para se manter
            informado sobre como protegemos seus dados.
          </p>
        </section>

        <footer className="privacy-footer">
          <p>Obrigado por utilizar a Bookbay!</p>
        </footer>
      </div>
    </div>
  );
}
