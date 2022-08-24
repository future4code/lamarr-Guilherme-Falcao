import React from "react";
import { goToApplicationFormPage, goToBack } from "../rotas/Coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/Constants";
import {useRequestDataGet} from "../hooks/useRequestData";
import { Cards } from "../pages/style";
import { CardsStyle, HeaderTrips, ButtonsHome } from "../pages/style";

function ListTripsPage() {
  const navigate = useNavigate();

  const [dataTripList, isLoadingUser, erroUser] = useRequestDataGet(
    `${BASE_URL}trips`
  );

  const tripList=dataTripList&&dataTripList.trips.map((data) => {
  return <Cards key={data.id}>
  <p>Nome da viagem: {data.name}</p>
  <p>Planeta a ser visitado: {data.planet}</p>
  <p>Duração em dias: {data.durationInDays}</p>
  <p>Data da viagem: {data.date}</p>
  <p>Descrição: {data.description}</p></Cards>
  })

  return (
    <CardsStyle>
      <HeaderTrips>Viagens</HeaderTrips>

        {isLoadingUser&&"viajando para a outra página..."}
        <ul>
        {!isLoadingUser&&dataTripList&&tripList}
        </ul>
        {!isLoadingUser&&!dataTripList&&erroUser}

      <ButtonsHome
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </ButtonsHome>
      <ButtonsHome
        onClick={() => {
          goToApplicationFormPage(navigate);
        }}
      >
        Inscrever-se
      </ButtonsHome>
    </CardsStyle>
  );
}

export default ListTripsPage;