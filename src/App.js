import './App.css'
import EcommercePic from './img/Ecommerce.png'
import ServicosPic from './img/achei_servicos.png'
import LabebankPic from './img/labebank.png'
import RestricoesPic from './img/Restricoes-de-acesso.png'
import Ifuture from './img/feed.jpeg'



function App() {
  return (
    <div>
      <h1>Portfólio</h1>
      <h3 className='firstTitle'>Flamarion França</h3>
      <div className='firstContent'>
        Sou desenvolvedor web e mobile fullstack junior em busca de experiência profissional,
        e este site representa o portfólio dos meus principais projetos.
        São aplicativos mobile, frontend, backend, fullstack e API's.
        A intenção é apresentar minhas habilidades em programação
        mobile e web não só para empresas, mas também como uma forma de acompanhar meu processo evolutivo,
        à medida que vou estudando e adquirindo mais conhecimento na área, por isso esse portfólio estará em
        constante atualização tanto no aprimoramento dos projetos que já apresento aqui como no acréscimo de outros ao longo do tempo.
        Também tive o cuidado de mantér a responsividade em todos os projetos.
        <div style={{marginTop:'3%'}}/>
        Contatos: <br/>&emsp;Tel: (71) 98470-7037 / 98850-0067<br/>&emsp;
        Email: <a href='mailto:francadasilvaflamarion@gmail.com'>francadasilvaflamarion@gmail.com</a>
      </div>
      <div className='matrixContainer'>

        <div className="matrix">
          <a href="https://e-commerce-p17g.onrender.com" target="_blank">E-commerce (frontend)</a>
            <br/>
            <img src={EcommercePic} width="300"
            alt="imagem do app Ecommerce"/>
          <div class="matrixTxt">
            App que simula um pequeno marketplace, com filtragem de busca por valor e nome. Além de carrinho para adicionar os produtos.
            <br/><br/>
            <a href="https://github.com/Gazua300/E-commerce" target="_blank">
              Respositório
            </a>
          </div>
        </div>

        <div className="matrix">
          <a href="https://loja-de-servicos.onrender.com/" target="_blank">Loja de Serviços(fullstack)</a>
            <br/>
            <img src={ServicosPic} width="300"
            alt="imagem do app loja de serviços"/>
          <div class="matrixTxt">
            Projeto fullstack de app para cadastramento e divulgação de serviços diversos:<br/><br/>
            <a href="https://play.google.com/store/apps/details?id=com.gazua300.acheiservicos" target="_blank">
              Versão mobile no google play
            </a><br/>
            <a href="https://github.com/Gazua300/achei_servicos-server" target="_blank">
              Repositório
            </a>
          </div>
        </div>

        <div className="matrix">
          <a href="https://labebank-frontend.vercel.app/" target="_blank">Fakebank (fullstack)</a>
            <br/>
            <img src={LabebankPic} width="300" alt="imagem do app labebank"/>
          <div class="matrixTxt">
            Aplicativo para operações bancárias. Simula as mais básicas operações como saldo, extrato,pagamentos e transfereências.
            <br/><br/>
            <a href='https://play.google.com/store/apps/details?id=com.gazua300.fakebank' target='_blank'>
              Versão mobile no google play
            </a>
            <br/>
            <a href="https://github.com/Gazua300/labebank" target="_blank">
              Repositório
            </a>
          </div>
        </div>

        <div className="matrix">
          <a href="https://documenter.getpostman.com/view/11884929/Uz5KkEQM" target="_blank">Restrições de acesso (backend, API)</a>
            <br/>
            <img src={RestricoesPic} width="300"
            alt=""/>
          <div class="matrixTxt">
            API com endpoints para guardar informações pessoais, sobre educação e experiências profissionais
            dos usuários. As informações tem acesso restrito através de um token que é gerado
            ao criar a conta e quando é realizado o login.
            <br/><br/>
          <a href="https://github.com/Gazua300/Restricoes-de-acesso" target="_blank">
            Repositório
          </a>
          </div>
        </div>

        <div className="matrix">
          <a href="https://github.com/Gazua300/labefood_mobile" target="_blank">Ifuture (mobile)</a>
            <br/>
            <img src={Ifuture} width="300" height='400' 
            alt="imagem do app labebank"/>
          <div class="matrixTxt">
            Aplicativo que simula um sistema de solicitação e 
            entrega de alimentos para reataurantes, pizzarias, churrascarias e etc.
            <br/><br/>
            <a href='https://play.google.com/store/apps/details?id=com.gazua300.ifuture' target='_blank'>
              Google play
            </a>
            <br/>
            <a href="https://github.com/Gazua300/labefood_mobile" target="_blank">
              Repositório
            </a>
          </div>
        </div>

      </div>      
      <footer>
      Gazua Dev Center<br/>
      {/* <a href="https://github.com/Gazua300" target="_blank">Github</a> | <a href="https://www.instagram.com/gazua300/" target="_blank">Instagram</a> */}
    </footer>
    </div>
  );
}

export default App;
