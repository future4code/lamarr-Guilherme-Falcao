import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage, { useRequestDataGet } from "../hooks/useRequestData";
import { goToAdminHomePage } from "../rotas/Coordinator";
import {
  ButtonsHome,
  Cards,
  CardsStyle,
  HeaderTrips,
  HomeStyle,
} from "./style";
import { BASE_URL } from "../constants/Constants";

function TripDetailsPage() {
  const navigate = useNavigate();
  useProtectedPage();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme_brazao_lamarr/trip/:id",
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

  const [dataTripList] = useRequestDataGet(`${BASE_URL}trips/`);

  const TripDetails =
    dataTripList &&
    dataTripList.trips.map((data) => {
      return (
        <Cards>
          <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.planet}</p>
            <p>{data.durationInDays}</p>
            <p>{data.date}</p>
            <p>{data.description}</p>
          </div>
        </Cards>
      );
    });

  return (
    <CardsStyle>
      <HeaderTrips>
        Para o administrador ver o detalhe de uma viagem específica, bem como os
        candidatos que aplicaram para ela
      </HeaderTrips>
      {TripDetails}
      <ButtonsHome
        onClick={() => {
          goToAdminHomePage(navigate);
        }}
      >
        Voltar
      </ButtonsHome>
      <ButtonsHome>Aprovar</ButtonsHome>
      <ButtonsHome>Reprovar</ButtonsHome>
    </CardsStyle>
  );
}

export default TripDetailsPage;
