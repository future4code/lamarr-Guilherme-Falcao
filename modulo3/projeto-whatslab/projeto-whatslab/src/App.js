import styled from 'styled-components';
import React, { useState } from 'react';

const OrangeSideBar = styled.span`
  background-color: orange;
  width: 15vw;
  height: 85vh;
  display: flex;
`
const MidMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  input, button{
    margin: 0 3px;
  }
`
const WhiteHeader = styled.header`
justify-content: center;
align-items: center;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  img{
    margin: 5px;
    width: 4vw;
  }
`
const Main = styled.main`
  display: flex;
    align-items: flex-end;
`
const Footer = styled.footer`
  background-color: grey;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6vh;
`
const DivMap = styled.span`
display: flex;
justify-content: center;
align-items: center;
`
const InputName = styled.input`
border-radius: 10px;
border: none;
background-color: whitesmoke;
text-align: left;
width: 6vw;
height: 6vh;
`
const InputMenssage = styled.input`
border-radius: 8px;
border: none;
background-color: whitesmoke;
text-align: left;
width: 30vw;
height: 6vh;
`
const Button = styled.button`
width: 10vw;
height: 7vh;
border-radius: 8px;
border: none;
background-color: lightgrey;
color: black;
:hover{
  cursor:pointer;
  background-color: orangered;
  color: whitesmoke;
}
`

function App() {
  
//estados
  const [inputUser, setInputUser] = useState("")
  const [inputMessage, setInputMessage] = useState("")
  const [app, setApp] = useState([

  ]);

  //eventos
  const handleInputUser = (event) => {
    setInputUser(event.target.value)
  }
  const handleInputMessage = (event) => {
    setInputMessage(event.target.value)
  }

  //adicionar mensagem

  const send = () => {
    const newMessage = {user: inputUser, message: inputMessage}
    const sendMessage = [...app,newMessage]
    setApp(sendMessage)}

    const appArray = app.map((elemento) => {
      return (
        <DivMap>
          <b>{elemento.user}:</b>
          {elemento.message}
        </DivMap>
      );
    });

  return (
  <div>
      <WhiteHeader>
        <img src="https://i.ytimg.com/an/_cy2msyfX-I6vXt0oxRGEg/featured_channel.jpg?v=62829fba"></img><b>LabZap</b></WhiteHeader>
        
      <Main>
        <OrangeSideBar/>
          <MidMain>
          <div>{appArray}
              <InputName value={inputUser} placeholder='nome' type="text" onChange={handleInputUser}/>
            
              <InputMenssage value={inputMessage} placeholder='mensagem' type="text"  onChange={handleInputMessage}/>
            
            <Button onClick={send}>Enviar mensagem</Button>
            </div>
          </MidMain>
        <OrangeSideBar/>
      </Main>
      <Footer>Guilherme Brazão © 2022 Labenu All rights reserved. R. Pais Leme, 215, Conjunto 820 - Pinheiros - CEP 05424-150</Footer>
  </div>
  );
}

export default App;