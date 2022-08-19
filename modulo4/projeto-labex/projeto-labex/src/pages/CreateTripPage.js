import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../rotas/Coordinator";
import useProtectedPage, { useForm } from "../hooks/useRequestData";
import {
  AllHeaders,
  HomeStyle,
  ButtonsHome,
  SelectStyle,
  InputStyle,
} from "../pages/style";
import axios from "axios";

function CreateTripPage() {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const dataAtual = dia + "/" + mes + "/" + ano;

  const navigate = useNavigate();

  useProtectedPage();

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

  const [form, onChange, clear] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationIndays: "",
  });

  const createTrip = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme_brazao_lamarr/trips",
        form
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
    clear();
  };

  return (
    <HomeStyle>
      <AllHeaders>Criar Viagem</AllHeaders>
      <form onSubmit={createTrip}>
        <InputStyle
          name="name"
          value={form.name}
          onChange={onChange}
          id="name"
          type="text"
          placeholder="Nome"
          pattern={"(.*[a-z]){5}"}
          required
        ></InputStyle>
        <br />
        <SelectStyle>
          <option value="Escolha um planeta" selected>
            Escolha um planeta
          </option>
          <option key="Mercúrio" value="Mercúrio">
            Mercúrio
          </option>
          <option key="Vênus" value="Vênus">
            Vênus
          </option>
          <option key="Terra" value="Terra">
            Terra
          </option>
          <option key="Marte" value="Marte">
            Marte
          </option>
          <option key="Júpter" value="Júpter">
            Júpter
          </option>
          <option key="Saturno" value="Saturno">
            Saturno
          </option>
          <option key="Urano" value="Urano">
            Urano
          </option>
          <option key="Netuno" value="Netuno">
            Netuno
          </option>
          <option key="Plutão" value="Plutão">
            Plutão
          </option>
        </SelectStyle>
        <br />
        <InputStyle
          type="date"
          name="date"
          value={form.date}
          onChange={onChange}
          id="date"
          min={dataAtual}
          required
        ></InputStyle>
        <br />
        <InputStyle
          name="description"
          value={form.description}
          onChange={onChange}
          id="description"
          type="text"
          placeholder="Descrição"
          // pattern={"(?=^.{30,100}$)^([A-Za-z][\s]?)+$"}
          required
        ></InputStyle>
        <br />
        <InputStyle
          name="durationIndays"
          value={form.durationIndays}
          onChange={onChange}
          id="durationIndays"
          type="text"
          placeholder="Duração em Dias"
          min="50"
          required
        ></InputStyle>
        <br />
        <ButtonsHome
          onClick={() => {
            goToHomePage(navigate);
          }}
        >
          Logout
        </ButtonsHome>
        <ButtonsHome>Criar</ButtonsHome>
      </form>
    </HomeStyle>
  );
}

export default CreateTripPage;
