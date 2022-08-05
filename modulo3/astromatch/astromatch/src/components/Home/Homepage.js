import { Cards } from "../Cards/Cards";
import { Matchpage } from "../Matchpage/Matchpage";
import React, { useState } from "react";

export function Homepage() {
  const [openMatchpage, setOpenMatchpage] = useState(false);
  const [botao, setBotao] = useState(true);

  function renderizar() {
    switch (openMatchpage) {
      case false:
        return <Cards trocaTela={trocaTela} />;
      case true:
        return <Matchpage trocaTela={trocaTela} />;
    }
  }
  function trocaTela() {
    if (openMatchpage === false) {
      setOpenMatchpage(true);
      setBotao(false);
    } else {
      setOpenMatchpage(false);
      setBotao(true);
    }
    return (
    <div>
    <button onClick={()=>trocaTela()}>{botao}</button>
    {renderizar()}
    </div>
    )
  }
}
