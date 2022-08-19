import React from "react";
import axios from "axios";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AllHeaders, HomeStyle, ButtonsHome } from "../pages/style";
import {
  goToBack,
  goToCreateTripPage,
  goToHomePage,
  goToLoginPage,
} from "../rotas/Coordinator";
import useProtectedPage from "../hooks/useRequestData";

function AdminHomePage() {
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

  const navigate = useNavigate();
  return (
    <HomeStyle>
      <AllHeaders>
        Página do Administrador
      </AllHeaders>
      <ButtonsHome
        onClick={() => {
          goToHomePage(navigate);
        }}
      >
        Página inicial
      </ButtonsHome>
      <ButtonsHome
        onClick={() => {
          goToCreateTripPage(navigate);
        }}
      >
        Criar Viagem
      </ButtonsHome>
      <ButtonsHome
        onClick={() => {
          goToLoginPage(navigate);
        }}
      >
        Logout
      </ButtonsHome>
    </HomeStyle>
  );
}

export default AdminHomePage;
