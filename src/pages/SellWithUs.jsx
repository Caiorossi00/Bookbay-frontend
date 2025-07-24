import React from "react";
import "../assets/styles/SellWithUs.scss";

export default function SellWithUs() {
  return (
    <div className="sell-with-us">
      <div className="container">
        <h1>Quer vender conosco?</h1>
        <p className="last-updated">
          <strong>Última atualização:</strong> 24 de julho de 2025
        </p>

        <section>
          <h2>1. Localização e Estoque</h2>
          <ul>
            <li>
              Vendedor deve residir em Jaguarão ou deixar o estoque físico com a
              BookBay para facilitar a gestão logística.
            </li>
            <li>
              Livros em estoque devem estar organizados e disponíveis para
              conferência.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Catálogo Disponível</h2>
          <p>
            O vendedor precisa disponibilizar um catálogo atualizado, alterações
            no catálogo devem ser comunicadas imediatamente.
          </p>
        </section>

        <section>
          <h2>3. Taxas e Comissões</h2>
          <p>
            É definida uma porcentagem fixa da comissão retida pela BookBay por
            venda.
          </p>
        </section>

        <section>
          <h2>4. Envio e Logística</h2>
          <ul>
            <li>O envio dos livros vendidos é responsabilidade da BookBay.</li>
            <li>
              Prazos e condições de envio serão informados e devem ser seguidos
              para garantir satisfação do comprador.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Qualidade dos Livros</h2>
          <ul>
            <li>
              Somente livros em bom estado, sem rasuras, páginas faltantes ou
              danos significativos serão aceitos.
            </li>
            <li>
              A BookBay se reserva o direito de recusar livros que não atendam
              aos padrões.
            </li>
            <li>
              Caso um livro seja devolvido por insatisfação do comprador, o
              vendedor será informado para providências.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Pagamento ao Vendedor</h2>
          <ul>
            <li>
              Pagamentos serão feitos mensalmente, após fechamento do extrato de
              vendas.
            </li>
            <li>
              O vendedor deve fornecer dados bancários válidos para
              transferência.
            </li>
            <li>
              Em caso de devoluções ou cancelamentos, os valores serão
              descontados da próxima remessa.
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Rescisão da Parceria</h2>
          <ul>
            <li>
              Qualquer das partes pode encerrar a parceria com aviso prévio de
              12 dias.
            </li>
            <li>
              Em caso de descumprimento das regras, a BookBay pode suspender ou
              cancelar o cadastro do vendedor.
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Suporte e Comunicação</h2>
          <ul>
            <li>
              O vendedor terá acesso a um canal de comunicação direto para
              dúvidas, suporte e atualizações.
            </li>
            <li>
              Feedbacks dos clientes serão repassados para melhoria contínua.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
