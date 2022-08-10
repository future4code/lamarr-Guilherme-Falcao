import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../rotas/Coordinator";

function TripDetailsPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>
        TripDetailsPage.js → Para o administrador ver o detalhe de uma viagem
        específica, bem como os candidatos que aplicaram para ela
      </p>
      <button
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </button>
      <button>Aprovar</button>
      <button>Reprovar</button>
    </div>
  );
}

export default TripDetailsPage;