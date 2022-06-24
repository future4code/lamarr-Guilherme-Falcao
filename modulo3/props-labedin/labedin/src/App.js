import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './img/foto-perfil.png';
import CallanMethod from './img/callan.png';
import BentelerLogo from './img/benteler.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemEnvelope from './img/envelope.png';
import ImagemLocalizacao from './img/localizacao.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {ImagemPerfil}
          nome="Guilherme Brazão Falcão" 
          descricao="Oi, eu sou o Guilherme Brazão. Sou estudante da Labenu. Gosto muito de ficar por dentro das novidades em tecnologia. Estou me identificando muito com o Front-end e posso ajudar você a resolver seus problemas."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          imagem= {ImagemEnvelope}
          descricao="Email: guifalcaoo@gmail.com"
        />

        <CardPequeno
          imagem= {ImagemLocalizacao}
          descricao="Endereço: Rua Lorenzo Veneziano, 11"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais e Cursos</h2>
        <CardGrande 
          imagem= {BentelerLogo} 
          nome="Benteler Componentes Automotivos" 
          descricao="Atualmente atuo como operador multifuncional de máquinas. Rotina incluindo filosofia 5S, Gemba Walk, Kamishibai, manutenção autônoma entre outras metodologias e filosofias do mundo automotivo." 
        />
        
        <CardGrande 
          imagem={CallanMethod} 
          nome="Callan Method • Liberty Languages" 
          descricao="Inglês intermediário, cursando livro 4 do Callan Method na escola Liberty Languages!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
