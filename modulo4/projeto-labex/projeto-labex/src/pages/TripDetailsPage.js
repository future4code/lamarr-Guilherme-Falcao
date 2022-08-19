import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../hooks/useRequestData";
import { goToBack } from "../rotas/Coordinator";

function TripDetailsPage() {
  const navigate = useNavigate();

  useProtectedPage()

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme_brazao_lamarr/trip/NoIFVcOiSgTKTIPVZwXS",
    {
        headers: {
            auth: token
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log("Deu erro: ", error.response)
    })
  }, [])

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