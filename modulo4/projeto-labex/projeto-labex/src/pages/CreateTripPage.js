import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../rotas/Coordinator";
import { useForm } from "../hooks/useRequestData";
import axios from "axios";

function CreateTripPage() {
  const navigate = useNavigate();

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
    <div>
      <h2>Criar Viagem</h2>
      <form onSubmit={createTrip}>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          id="name"
          type="text"
          placeholder="Nome"
          required
        ></input>
        <br />
        <select>
          <option>Escolha um planeta</option>
        </select>
        <br />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={onChange}
          id="date"
          required
        ></input>
        <br />
        <input
          name="description"
          value={form.description}
          onChange={onChange}
          id="description"
          type="text"
          placeholder="Descrição"
          required
        ></input>
        <br />
        <input
          name="durationIndays"
          value={form.durationIndays}
          onChange={onChange}
          id="durationIndays"
          type="text"
          placeholder="Duração em Dias"
          required
        ></input>
        <br />
        <button
          onClick={() => {
            goToHomePage(navigate);
          }}
        >
          Logout
        </button>
        <button>Criar</button>
      </form>
    </div>
  );
}

export default CreateTripPage;
