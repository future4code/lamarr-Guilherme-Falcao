import React from "react";
import { goToApplicationFormPage, goToBack } from "../rotas/Coordinator";
import { useNavigate } from "react-router-dom";

function ListTripsPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p> ListTripsPage.js → Para vermos todas as viagens</p>
      <button
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          goToApplicationFormPage(navigate);
        }}
      >
        Se inscrever
      </button>
    </div>
  );
}

export default ListTripsPage;
