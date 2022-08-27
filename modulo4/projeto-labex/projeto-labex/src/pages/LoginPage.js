import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToAdminHomePage,
  goToBack,
  goToHomePage,
} from "../rotas/Coordinator";
import { useForm } from "../hooks/useRequestData";
import { AllHeaders, HomeStyle, InputLogin, ButtonsHome } from "../pages/style";

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
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/admin/trips/list");
      })
      .catch((error) => {
        alert("Email e/ou senha incorretos", error.message);
      });
    clear();
  };

  return (
    <HomeStyle>
      <AllHeaders>Login</AllHeaders>
      <form onSubmit={login}>
        <label htmlFor="email"></label>
        <InputLogin
          name="email"
          value={form.email}
          onChange={onChange}
          id="email"
          type="email"
          placeholder="e-mail"
          required
        ></InputLogin>
        <br />
        <label htmlFor="password"></label>
        <InputLogin
          name="password"
          value={form.password}
          onChange={onChange}
          id="password"
          type="password"
          placeholder="senha"
          required
        ></InputLogin>
        <br />
        <ButtonsHome
          onClick={() => {
            goToHomePage(navigate);
          }}
        >
          Voltar
        </ButtonsHome>
        <ButtonsHome type="submit">Fazer login</ButtonsHome>
      </form>
    </HomeStyle>
  );
}

export default LoginPage;
