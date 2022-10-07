const user = {
    name: "astrodev",
    login: () => {
        console.log("Usuário foi logado com sucesso!")
    }
}

// const username = user.name
// const login = user.login

const { name: username, login } = user

console.log(username)
login()

const users = [
    {
        name: "astrodev",
        login: () => {
            console.log("Usuário foi logado com sucesso!")
        }
    },
    {
        name: "fulana",
        login: () => {
            console.log("Fulana foi logada com sucesso!")
        }
    }
]

// const fulana = users[1]

const [ , fulana ] = users

fulana.login()
