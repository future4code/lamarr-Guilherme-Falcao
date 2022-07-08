import React from 'react';
import styled from 'styled-components'
import { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'

const Form = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding: 10px;
margin: 3px;
background-color: lightseagreen;
border-radius: 20px;
width: 21vw;

 label{
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size:20px;
}
input{
  text-align: center;
  height:5vh;
  width:15vw;
  border-radius:10px;
  font-style:bold;
} 
button{
  font-weight:bold;
  font-size:large;
  margin-top:10px;
  width:8vw;
  height:7vh;
  border-radius:40px;
}
button:hover{
  cursor:pointer;
  background-color: orange;
  transition: 0.5s;
} 
`

function App() {
    const [inputUser, setInputUser] = useState("")
    const [inputPhotoPost, setInputPhotoPost] = useState("")
    const [inputPhotoUser, setInputPhotoUser] = useState("")
    const [posts, setPosts] = useState([
    {
      nomeUsuario: `leozera`,
      fotoUsuario:
        "https://media-exp2.licdn.com/dms/image/C5103AQG1P5ma_6sqyg/profile-displayphoto-shrink_200_200/0/1517275479726?e=1661990400&v=beta&t=RCtF2soLzoO2E7zqRNh4hIe3NDrFMRAl2PG1vyae9q4",
      fotoPost:
        "https://media.istockphoto.com/photos/colorful-flags-and-decorative-balloon-for-the-saint-john-party-which-picture-id1405434550?k=20&m=1405434550&s=612x612&w=0&h=z6pbXSfKx_514UybGXAGt6yDvnt9pBsB8RZXpI55U_I=",
    },
    {
      nomeUsuario: `guiii`,
      fotoUsuario:
        "https://media-exp2.licdn.com/dms/image/D4E03AQG1BARsxH3h9Q/profile-displayphoto-shrink_200_200/0/1648414713849?e=1661990400&v=beta&t=H2y-Jwau1pW8vf7OpjnRty2Vwatg5bPD-amV8nnOybY",
      fotoPost:
        "https://images.unsplash.com/photo-1565841631075-99fc4dcaafd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFyYmVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      nomeUsuario: `vitaum`,
      fotoUsuario:
        "https://media-exp2.licdn.com/dms/image/C4D03AQFFZSK7Q-8pTg/profile-displayphoto-shrink_200_200/0/1545754980434?e=1661990400&v=beta&t=pIB-Z6j22gRDCjSybHMgHKOlntDe23P5HBKPqvoWyx8",
      fotoPost:
        "https://images.unsplash.com/photo-1471180625745-944903837c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    },      
  ]);

  // eventos

  const handleInputUser = (event) => {
    setInputUser(event.target.value)
  }

  const handleInputPhotoPost = (event) => {
    setInputPhotoPost(event.target.value)
  }

  const handleInputPhotoUser = (event) => {
    setInputPhotoUser(event.target.value)
  }

// adicionar publicação
const publish = () => {
  const makeNewPost = {nomeUsuario: inputUser, fotoPost: inputPhotoPost,fotoUsuario: inputPhotoUser}
  const newPost = [...posts,makeNewPost]
  setPosts(newPost)}

  const listaDePosts = posts.map((elemento, index) => {
    return (
      <Post
        nomeUsuario={elemento.nomeUsuario}
        fotoUsuario={elemento.fotoUsuario}
        fotoPost={elemento.fotoPost}
        key={index}
      />
    );
  });

  return (<div className="MainContainer">{listaDePosts}
  
  <Form>
  <label>Nome:</label>
  <input type="text"
    placeholder="Insira seu nome de usuário"
    value={inputUser}
    onChange={handleInputUser}
    /> 
  <label>Foto:</label>
  <input type="img"
    placeholder="Insira uma url de imagem"
    value={inputPhotoPost}
    onChange={handleInputPhotoPost}
    /> 
  <label>Foto de usuário:</label>
  <input type="img"
    placeholder="Insira uma url de imagem"
    value={inputPhotoUser}
    onChange={handleInputPhotoUser}
    /> 
     <button onClick={publish}>Postar</button> 
     </Form>

    </div>)
}
export default App;