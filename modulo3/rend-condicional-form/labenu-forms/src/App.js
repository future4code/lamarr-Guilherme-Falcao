import React, {useState} from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

function App() {
  const [trocaPagina, setTrocaPagina]=useState(1);

  function trocarPaginas(){
    setTrocaPagina(trocaPagina+1);
}

  function renderizaEtapa(){
    switch(trocaPagina){
        case 1:
          return <Etapa1/>;
        case 2:
          return <Etapa2/>;
        case 3:
          return <Etapa3/>;
        case 4:
          return <Final/>;
    }
} 
  return (
    <div>
      {renderizaEtapa()}
      <button onClick={trocarPaginas}>Próxima etapa</button>
    </div>
  );
}

export default App;