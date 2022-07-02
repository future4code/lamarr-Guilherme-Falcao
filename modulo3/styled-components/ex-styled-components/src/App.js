import styled from 'styled-components';
import React from 'react';

const OrangeSideBar = styled.span`
  background-color: orange;
  width: 15vw;
  height: 100vh;
  display: flex;
`
const MidMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
input,button{
  margin: 0 10px;
}
`
const WhiteHeader = styled.header`
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  img{
    width: 4vw;
  }
`
const Main = styled.main`
  display: flex;
  align-items: center;
    justify-content: center;
  button{
    width: 20vw;
    height: 5vh;
    }
  input{
    height: 4vh;
  }
`
const Footer = styled.footer`
  background-color: grey;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6vh;
`

function App() {
  return (
    <div>
      <WhiteHeader>
        <img src="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj"></img><b>LabZap</b></WhiteHeader>
      <Main>
        <OrangeSideBar/>
          <MidMain>
            <label>
              Nome:
              <input type="text" id="name"/>
            </label>
            <label>
              Msg:
              <input type="text" id="message"/>
            </label>
            <button>Enviar mensagem</button>
          </MidMain>
        <OrangeSideBar/>
      </Main>
      <Footer>Guilherme Brazão © 2022 Labenu All rights reserved. R. Pais Leme, 215, Conjunto 820 - Pinheiros - CEP 05424-150</Footer>
    </div>
  );
}

export default App;
