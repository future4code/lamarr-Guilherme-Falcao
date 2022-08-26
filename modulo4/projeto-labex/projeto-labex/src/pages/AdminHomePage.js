import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import {
  AllHeaders,
  HomeStyle,
  ButtonsHome,
  TripsAdm,
  CardContainer,
  AdminDelete,
  CardsStyle,
} from "../pages/style";
import {
  goToAdminHomePage,
  goToCreateTripPage,
  goToHomePage,
  goToListTripsPage,
  goToLoginPage,
  goToTripDetailsPage,
} from "../rotas/Coordinator";
import useProtectedPage, { useRequestDataGet } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/Constants";
import { clear } from "@testing-library/user-event/dist/clear";

function AdminHomePage() {
  const navigate = useNavigate();
  useProtectedPage();

  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  const deleteTrip = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme_brazao_lamarr/trips/${id}`,
        headers
      )
      .then((response) => console.log(response.data), alert("Viagem apagada!"));
    goToListTripsPage(navigate)
    .catch((error) => console.log(error.message));
    clear();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme_brazao_lamarr/trip/NoIFVcOiSgTKTIPVZwXS",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const [dataTripList] = useRequestDataGet(`${BASE_URL}trips`);

  const selectTrip =
    dataTripList &&
    dataTripList.trips.map((data) => {
      return (
        <AdminDelete>
          <TripsAdm
            key={data.id}
            onClick={() => {
              goToTripDetailsPage(navigate);
            }}
          >
            {data.name}
          </TripsAdm>
          <FaTrashAlt
            onClick={() => {
              deleteTrip(data.id);
            }}
            class="trashIcon"
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
