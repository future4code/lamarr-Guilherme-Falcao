import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../rotas/Coordinator";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>LabeX</h1>

      <button
        onClick={() => {
          goToListTripsPage(navigate);
        }}
      >
        Trips
      </button>
      <button
        onClick={() => {
          goToLoginPage(navigate);
        }}
      >
        Admin
      </button>
    </div>
  );
}

export default HomePage;
