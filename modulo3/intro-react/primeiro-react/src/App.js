// import logo from './logo.svg';
import './App.css';
import imagemPerfil from "./img/fotoPerfil.png"

function App() {
  function mensagem(){
    alert("Boa noite! 🌹")
  }
  return (
    <div className="App">
      <h1>Oi, eu sou o Gui Brazão!</h1>
      <img src={imagemPerfil} className="perfil" alt="imagemDePerfil" />
      <button onClick= {mensagem}>Aperta esse botão, é pro meu tcc</button>
    </div>
  );
}

export default App;
