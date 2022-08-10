import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../rotas/Coordinator";

function ApplicationFormPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>
        ApplicationFormPage.js → Para o usuário se candidatar à viagens, página
        que vai ter o formulário de inscrição
      </p>
      <ul><input></input></ul>
      <ul><input></input></ul>
      <ul><input></input></ul>
      <ul><input></input></ul>
      <ul><input></input></ul>
      <ul><input></input></ul>
      <button
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </button>
      <button type="submit">Enviar</button>
    </div>
  );
}

export default ApplicationFormPage;
