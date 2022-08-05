import { Cards } from "../Cards/Cards";
import { Matchpage } from "../Matchpage/Matchpage";
import React, { useState } from "react";

export function Homepage() {

  const [openMatchpage, setOpenMatchpage] = useState(false)
  const [botao, setBotao] = useState(true)

  switch (openMatchpage){
    case false:
      return <Cards />
    case true:
      return <Matchpage />
  }
 function trocaTela() {
  if(openMatchpage === false){
    setOpenMatchpage(true)
    setBotao(false)
  } else {
    setOpenMatchpage(false)
    setBotao(true)
  }
} 
return (
  <div> 
    {Homepage()}
    <button onClick={() => trocaTela()}>{botao}</button>
    {openMatchpage ? <Matchpage /> : <Cards />} 
  </div>
  )}