import React from "react";
import { goToApplicationFormPage, goToBack } from "../rotas/Coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/Constants";
import {useRequestDataGet} from "../hooks/useRequestData";
import { Cards } from "../pages/style";

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
  <p>Descrição: {data.description}</p>  </Cards>
  })

  return (
    <div>
      <h2>Viagens</h2>

        {isLoadingUser&&"Carregando..."}
        <ul>
        {!isLoadingUser&&dataTripList&&tripList}
        </ul>
        {!isLoadingUser&&!dataTripList&&erroUser}

      <button
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          goToApplicationFormPage(navigate);
        }}
      >
        Se inscrever
      </button>
    </div>
  );
}

export default ListTripsPage;