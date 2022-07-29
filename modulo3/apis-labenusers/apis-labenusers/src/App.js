import axios from 'axios';
import { useEffect, useState } from 'react';
import {Input, Container, H1, ButtonAdd, ButtonRem} from './style';

const App = () => {

    const [users, setUsers] = useState(["ola"])
    const [addName, setAddName] = useState("")
    const [addEmail, setAddEmail] = useState("")

    const userName = (event) => {
      setAddName(event.target.value)
    }
  
    const userEmail = (event) => {
      setAddEmail(event.target.value)
    }

  const componentList = users.map((item, index) => {
    return (<div key={index}>
        {item.name}
    </div>)
})
  
useEffect(() => {
  getUserById()
}, [])


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const myHeaders = {
        headers: {
            Authorization: "guilherme-brazao-lamarr"
        }
    }

    const getUserById = () => {
      axios.get(url, myHeaders).then((response) => {
        setUsers(response.data.result.list)
      }).catch(
          (erro) => {
            //   console.log(erro.response);
          })
  }

  const body = {
    "name": addName,
    "email": addEmail,
}

  const postNewUser = (event) => {
    event.preventDefault()
    axios.post(url, body, myHeaders).then(() => {
        alert("Usuário adicionada com sucesso!")
        getUserById()
    }).catch((erro) => {
        alert("Ops! Algo deu errado!")
        //console.log(erro.response);
    })
    setAddName("")
}

const deleteUser = (event) => {
  event.preventDefault()
  const delUser = users.filter((item) => item.name === addName)
  console.log(delUser[0].id);

  axios.delete(url + "/" + delUser[0].id, myHeaders).then((response) => {
      alert("PlayList deletada com sucesso!")
      getUserById()
      // getUserById()
  }).catch((erro) => {
      alert("Ops! Algo deu errado!")
      console.log(erro.response);
  })
  setAddName("")
}

return (
    <Container>
        <H1>Usuários</H1>
        <div>
            {componentList}
        </div>
        <div>
            <Input type="text" value={addName} placeholder="Nome" onChange={userName} />
            <Input type="email" value={addEmail} placeholder="Email" onChange={userEmail} />
            <ButtonAdd onClick={postNewUser}>
                Adicionar Usuário
            </ButtonAdd>
            <ButtonRem onClick={deleteUser}>
                Excluir Usuário
            </ButtonRem>
        </div>
    </Container>
)
}

export default App;