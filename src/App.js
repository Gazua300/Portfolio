import './App.css'
import EcommercePic from './img/Ecommerce.png'
import ServicosPic from './img/achei_servicos.png'
import LabebankPic from './img/labebank.png'
import Gerenciador_pix from './img/gerenciador-pix.png'
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
          <a href="https://e-commerce-p17g.onrender.com" target="_blank">E-commerce (fullstack)
            <br/>
            <img src={EcommercePic} width="300"
            alt="imagem do app Ecommerce"/>
          </a>
          <div class="matrixTxt">
            App que simula um pequeno marketplace, com filtragem de busca por valor e nome. Além de carrinho para adicionar os produtos.
            <br/><br/>
            <a href="https://github.com/Gazua300/E-commerce" target="_blank">
              Respositório Frontend
            </a>
            <br/>
            <a href="https://github.com/Gazua300/e-commerce-server" target="_blank">
              Respositório Backend
            </a>
          </div>
        </div>

        <div className="matrix">
          <a href="https://loja-de-servicos.onrender.com/" target="_blank">Loja de Serviços(fullstack)
            <br/>
            <img src={ServicosPic} width="300"
            alt="imagem do app loja de serviços"/>
          </a>
          <div class="matrixTxt">
            Projeto fullstack de app para cadastramento e divulgação de serviços diversos:<br/><br/>
            <a href="https://play.google.com/store/apps/details?id=com.gazua300.acheiservicos" target="_blank">
              Versão mobile no google play
            </a><br/>
            <a href="https://github.com/Gazua300/achei-servicos_frontend" target="_blank">
              Repositório Frontend
            </a><br/>
            <a href="https://github.com/Gazua300/achei_servicos-server" target="_blank">
              Repositório Backend
            </a><br/>
            <a href="https://github.com/Gazua300/achei-servicos" target="_blank">
              Repositório Mobile
            </a>                        
          </div>
        </div>

        <div className="matrix">
          <a href="https://fakebank.onrender.com/" target="_blank">Fakebank (fullstack)
            <br/>
            <img src={LabebankPic} width="300" alt="imagem do app labebank"/>
          </a>
          <div class="matrixTxt">
            Aplicativo para operações bancárias. Simula as mais básicas operações como saldo, extrato,pagamentos e transfereências.
            <br/><br/>
            <a href='https://play.google.com/store/apps/details?id=com.gazua300.fakebank' target='_blank'>
              Versão mobile no google play
            </a>
            <br/>
            <a href="https://github.com/Gazua300/labebank_frontend" target="_blank">
              Repositório Frontend
            </a><br/>            
            <a href="https://github.com/Gazua300/labebank" target="_blank">
              Repositório Backend
            </a><br/>            
            <a href="https://github.com/Gazua300/labebank_mobile" target="_blank">
              Repositório Mobile
            </a>
          </div>
        </div>

        <div className="matrix">
          <a href="https://documenter.getpostman.com/view/11884929/2s93XsYmN8" target="_blank">Gerenciador de pix (backend, API)
            <br/>
            <img src={Gerenciador_pix} width="300"
            alt=""/>
          </a>
          <div class="matrixTxt">
            API para gerenciamento e controle de cobranças via pix.
            A API é mais uma demonstração do meu trabalho, portanto os endpoints e
            resultados das requisições são para uma conta demonstrativa da Gerencianet.          
          </div>
        </div>

        <div className="matrix">
          <a href="https://ifuture-eyeb.onrender.com/" target="_blank">Ifuture (frontend)
            <br/>
            <img src={Ifuture} width="300" height='400' 
            alt="imagem do app labefood"/>
          </a>
          <div class="matrixTxt">
            Aplicativo que simula um sistema de solicitação e 
            entrega de alimentos para reataurantes, pizzarias, churrascarias e etc.
            <br/>
            Obs.: Caso haja problemas no acesso cole este link:<br/> https://ifuture-eyeb.onrender.com/
            <br/><br/>
            <a href='https://play.google.com/store/apps/details?id=com.gazua300.ifuture' target='_blank'>
              Versão mobile no google play
            </a><br/>
            <a href="https://github.com/Gazua300/labefood" target="_blank">
              Repositório Frontend
            </a><br/>
            <a href="https://github.com/Gazua300/labefood_mobile" target="_blank">
              Repositório Mobile
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
