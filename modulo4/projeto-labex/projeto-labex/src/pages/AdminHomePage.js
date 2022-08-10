import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToBack,
  goToCreateTripPage,
  goToHomePage,
} from "../rotas/Coordinator";

function AdminHomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>
        AdminHomePage.js → Para o administrador ver a lista de viagens e poder
        deletá-las ou acessar o detalhe de cada uma delas
      </p>
      <button
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          goToCreateTripPage(navigate);
        }}
      >
        Criar Viagem
      </button>
      <button
        onClick={() => {
          goToHomePage(navigate);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default AdminHomePage;
