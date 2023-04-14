import './App.css'
import EcommercePic from './img/Ecommerce.png'
import ServicosPic from './img/achei_servicos.png'
import LabebankPic from './img/labebank.png'
import Gerenciador_pix from './img/gerenciador-pix.png'
import Ifuture from './img/feed.jpeg'




function App() {

  const redirection = (link, id)=>{
    const myElement = document.getElementById(id)

    myElement.style.transition = 'transform 1.5s ease-in-out'
    myElement.style.transform = 'perspective(100px) rotateY(360deg)'

    const resetTransform = () => {
      myElement.style.transition = 'none';
      myElement.style.transform = 'none';
      myElement.removeEventListener('transitionend', resetTransform);
    };
  
    myElement.addEventListener('transitionend', resetTransform);

    setTimeout(() => {
      window.open(link, '_blank')
    }, 1500);
  }
  
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

        <div className="matrix" id='e-commerce'>
          <a onClick={()=> redirection('https://e-commerce-p17g.onrender.com', 'e-commerce')}>E-commerce (fullstack)
            <br/>
            <img src={EcommercePic} width="300"
            alt="imagem do app Ecommerce"/>
          </a>
          <div class="matrixTxt">
            App que simula um pequeno marketplace, com filtragem de busca por valor e nome. Além de carrinho para adicionar os produtos.
            <br/><br/>
            <a onClick={()=> redirection("https://github.com/Gazua300/E-commerce", 'e-commerce')}>
              Respositório Frontend
            </a>
            <br/>
            <a onClick={()=> redirection("https://github.com/Gazua300/e-commerce-server", 'e-commerce')}>
              Respositório Backend
            </a>
          </div>
        </div>

        <div className="matrix" id='loja-de-servicos'>
          <a onClick={()=> redirection("https://loja-de-servicos.onrender.com/", 'loja-de-servicos')}>Loja de Serviços(fullstack)
            <br/>
            <img src={ServicosPic} width="300"
            alt="imagem do app loja de serviços"/>
          </a>
          <div class="matrixTxt">
            Projeto fullstack de app para cadastramento e divulgação de serviços diversos:<br/><br/>
            <a onClick={()=> redirection("https://play.google.com/store/apps/details?id=com.gazua300.acheiservicos", 'loja-de-servicos')}>
              Versão mobile no google play
            </a><br/>
            <a onClick={()=> redirection("https://github.com/Gazua300/achei-servicos_frontend", 'loja-de-servicos')}>
              Repositório Frontend
            </a><br/>
            <a onClick={()=> redirection("https://github.com/Gazua300/achei_servicos-server", 'loja-de-servicos')}>
              Repositório Backend
            </a><br/>
            <a onClick={()=> redirection("https://github.com/Gazua300/achei-servicos", 'loja-de-servicos')}>
              Repositório Mobile
            </a>                        
          </div>
        </div>

        <div className="matrix" id='fakebank'>
          <a onClick={()=> redirection("https://fakebank.onrender.com/", 'fakebank')}>Fakebank (fullstack)
            <br/>
            <img src={LabebankPic} width="300" alt="imagem do app labebank"/>
          </a>
          <div class="matrixTxt">
            Aplicativo para operações bancárias. Simula as mais básicas operações como saldo, extrato,pagamentos e transfereências.
            <br/><br/>
            <a onClick={()=> redirection('https://play.google.com/store/apps/details?id=com.gazua300.fakebank', 'fakebank')}>
              Versão mobile no google play
            </a>
            <br/>
            <a onClick={()=> redirection("https://github.com/Gazua300/labebank_frontend", 'fakebank')}>
              Repositório Frontend
            </a><br/>            
            <a onClick={()=> redirection("https://github.com/Gazua300/labebank", 'fakebank')}>
              Repositório Backend
            </a><br/>            
            <a onClick={()=> redirection("https://github.com/Gazua300/labebank_mobile", 'fakebank')}>
              Repositório Mobile
            </a>
          </div>
        </div>

        <div className="matrix" id='pix-menager'>
          <a onClick={()=> redirection("https://documenter.getpostman.com/view/11884929/2s93XsYmN8", 'pix-menager')} >Gerenciador de pix (backend, API)
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

        <div className="matrix" id='ifuture'>
          <a onClick={()=> redirection("https://ifuture-eyeb.onrender.com/", 'ifuture')}>Ifuture (frontend)
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
            <a onClick={()=> redirection('https://play.google.com/store/apps/details?id=com.gazua300.ifuture', 'ifuture')}>
              Versão mobile no google play
            </a><br/>
            <a onClick={()=> redirection("https://github.com/Gazua300/labefood", 'ifuture')} >
              Repositório Frontend
            </a><br/>
            <a onClick={()=> redirection("https://github.com/Gazua300/labefood_mobile", 'ifuture')}>
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
