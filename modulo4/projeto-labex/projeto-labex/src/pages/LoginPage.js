import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToBack } from "../rotas/Coordinator";
import { useForm } from "../hooks/useRequestData";

function LoginPage() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const login = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme_brazao_lamarr/login",
        form
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
    clear();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <label htmlFor="email"></label>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          id="email"
          type="email"
          placeholder="e-mail"
          required
        ></input>
        <br />
        <label htmlFor="password"></label>
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          id="password"
          type="password"
          placeholder="senha"
          required
        ></input>
        <br />
        <button
          onClick={() => {
            goToBack(navigate);
          }}
        >
          Voltar
        </button>
        <button
          type="submit"
          onClick={() => {
            goToAdminHomePage(navigate);
          }}
        >
          Fazer login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;