import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../rotas/Coordinator";
import { HomeStyle, ButtonsHome, NameHome } from "../pages/style";

function HomePage() {
  const navigate = useNavigate();
  return (
    <HomeStyle>
      <NameHome>
        <h1>LabeX</h1>
        <ButtonsHome
        onClick={() => {
          goToListTripsPage(navigate);
        }}
      >
        Trips
      </ButtonsHome>
      <ButtonsHome
        onClick={() => {
          goToLoginPage(navigate);
        }}
      >
        Admin
      </ButtonsHome>
      </NameHome>

    </HomeStyle>
  );
}

export default HomePage;