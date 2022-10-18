import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import {
  AllHeaders,
  ButtonsHome,
  TripsAdm,
  CardContainer,
  AdminDelete,
  CardsStyle,
} from "../pages/style";
import {
  goToCreateTripPage,
  goToHomePage,
  goToListTripsPage,
  goToLoginPage,
  goToTripDetailsPage,
} from "../rotas/Coordinator";
import useProtectedPage, { useRequestDataGet } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/Constants";

function AdminHomePage() {
  const navigate = useNavigate();
  useProtectedPage();

  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  const [dataTripList] = useRequestDataGet(`${BASE_URL}trips/`);

  const deleteTrip = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme_brazao_lamarr/trips/${id}`,
        headers
      )
      .then((response) => console.log(response.data), alert("Viagem apagada!"));
    goToListTripsPage(navigate).catch((error) => console.log(error.message));
  };

  const selectTrip =
    dataTripList &&
    dataTripList.trips.map((data) => {
      return (
        <AdminDelete key={data.id}>
          <TripsAdm
            key={data.id}
            onClick={() => {
              goToTripDetailsPage(navigate, data.id);
            }}
          >
            {data.name}
          </TripsAdm>
          <FaTrashAlt
            onClick={() => {
              deleteTrip(data.id);
            }}
            className="trashIcon"
          ></FaTrashAlt>{" "}
        </AdminDelete>
      );
    });

  return (
    <CardsStyle>
      <CardContainer>
        <AllHeaders>Página do Administrador</AllHeaders>
        {selectTrip}
      </CardContainer>
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
    </CardsStyle>
  );
}

export default AdminHomePage;
