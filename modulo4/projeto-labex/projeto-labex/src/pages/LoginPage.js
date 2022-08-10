import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToBack } from "../rotas/Coordinator";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>LoginPage.js → Para fazermos login como administrador</p>
      <button
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          goToAdminHomePage(navigate);
        }}
      >
        Fazer Login
      </button>
    </div>
  );
}

export default LoginPage;