import React, { useState, useEffect } from "react";
import {
  ButtonRed,
  ButtonGreen,
  Container,
  Img,
  Header,
  NameAge,
  Bio,
  Buttons,
  ButtonMatches,
} from "./style";
import { getProfile } from "../Constantes/index";
import axios from "axios";

export function Cards(props) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfile(setProfile);
  }, []);

  async function CreateMatch(id) {
    try {
      const response = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/choose-person",
        {
          id: id,
          choice: true,
        },
        {}
      );
      getProfile(setProfile);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header>
        <h1>astromatch</h1>
        <ButtonMatches onClick={()=>(props.trocaTela)}>Matches</ButtonMatches>
      </Header>
        <Img src={profile.photo} />
        <NameAge>
          {profile.name}, {profile.age}
        </NameAge>
        <Bio>{profile.bio}</Bio>
      <Buttons>
        <ButtonRed onClick={() => getProfile(setProfile)}>
          Hoje não, faro
        </ButtonRed>
        <ButtonGreen onClick={() => CreateMatch(profile.id)}>
          Hoje sim!
        </ButtonGreen>
      </Buttons>
    </Container>
  );
}