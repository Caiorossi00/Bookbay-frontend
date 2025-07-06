import React from "react";
import "../assets/styles/TOS.scss";

const TermsOfService = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1>Termos de Serviço – Bookbay</h1>
        <p className="last-updated">
          <strong>Última atualização:</strong> 06 de julho de 2025
        </p>

        <section>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao utilizar o site da Bookbay, você concorda em obedecer a estes
            Termos de Serviço, bem como a nossa
            <a href="/politica-de-privacidade"> Política de Privacidade</a>. Se
            você não concorda com qualquer parte destes termos, por favor, não
            utilize nosso serviço.
          </p>
        </section>

        <section>
          <h2>2. Descrição do Serviço</h2>
          <p>
            O Bookbayy é uma plataforma de e-commerce dedicada à venda de livros
            usados. Nosso objetivo é proporcionar uma experiência segura e
            prática de compra online para todos os usuários.
          </p>
        </section>

        <section>
          <h2>3. Cadastro de Usuário</h2>
          <ul>
            <li>
              Para realizar compras, é necessário criar uma conta com
              informações verídicas e atualizadas.
            </li>
            <li>
              Você é responsável por manter a confidencialidade da sua senha e
              pelo uso da sua conta.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Compras e Pagamentos</h2>
          <ul>
            <li>
              Os preços dos produtos estão sujeitos a alterações sem aviso
              prévio.
            </li>
            <li>
              Você receberá um e-mail com o status do pedido após a confirmação
              do pagamento.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Entrega</h2>
          <p>
            As entregas são realizadas via correios e os prazos variam conforme
            a localidade. A Bookbay não se responsabiliza por atrasos causados
            por terceiros ou eventos externos.
          </p>
        </section>

        <section>
          <h2>6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do site (incluindo logo, imagens, textos e layout)
            pertence à Bookbay ou aos seus parceiros. É proibida a reprodução,
            modificação ou distribuição sem autorização expressa.
          </p>
        </section>

        <section>
          <h2>7. Conduta do Usuário</h2>
          <p>Ao utilizar o Bookbay, você se compromete a não:</p>
          <ul>
            <li>Praticar atividades fraudulentas.</li>
            <li>Tentar invadir ou danificar o site.</li>
            <li>
              Utilizar bots ou ferramentas automatizadas para fins abusivos.
            </li>
            <li>
              Realizar compras com informações falsas ou de terceiros sem
              autorização.
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Limitação de Responsabilidade</h2>
          <p>
            A Bookbay não se responsabiliza por danos diretos ou indiretos
            decorrentes do uso do site, interrupções temporárias ou uso indevido
            da plataforma por parte do usuário.
          </p>
        </section>

        <section>
          <h2>9. Modificações nos Termos</h2>
          <p>
            Reservamo-nos o direito de alterar estes Termos a qualquer momento.
            O uso contínuo da plataforma implica aceitação dos novos termos.
          </p>
        </section>

        <section>
          <h2>10. Política de Privacidade</h2>
          <p>
            Os dados coletados são tratados de forma segura e conforme descrito
            na nossa
            <a href="/politica-de-privacidade"> Política de Privacidade</a>.
            Eles não serão compartilhados sem seu consentimento.
          </p>
        </section>

        <section>
          <h2>11. Contato</h2>
          <p>
            Em caso de dúvidas, sugestões ou solicitações, entre em contato pelo
            e-mail:
            <br />
            <strong>Caiorossi.code@gmail.com</strong>
          </p>
        </section>

        <footer className="terms-footer">
          <p>Obrigado por utilizar a Bookbay!</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;
