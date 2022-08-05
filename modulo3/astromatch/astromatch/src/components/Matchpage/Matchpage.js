import React, { useState, useEffect } from "react";
import { ButtonHome, Container, ImgMatch } from "./style";
import axios from "axios";
import { Cards } from "../Cards/Cards";

export function Matchpage(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches(setMatches);
  }, []);
  console.log(matches);

  const getMatches = async (setMatches) => {
    try {
      const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/matches"
      );
      setMatches(response.data.matches);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ButtonHome onClick={()=>(props.trocaTela)}>Home</ButtonHome>
      <div>
        {matches.map((match) => (
          <ul>
          <ImgMatch src={match.photo}/>
          <span>{match.name}</span>
          </ul>
        ))}
      </div>
    </Container>
  );
}