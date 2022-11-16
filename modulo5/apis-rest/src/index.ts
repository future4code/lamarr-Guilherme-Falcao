import express, { Request, Response } from "express"
import cors from 'cors'
import { users} from "./data"
import { UserType } from "./type"

const app = express()
app.use(express.json())
app.use(cors())

// Exercicio 1
// a. Utilizamos o Get;
// b. A entidade "/user";
app.get("/user",(req:Request, res:Response)=>{

    const allUsers = users.map((item)=>{
        return item
    })
    res.status(201).send(allUsers)})

//Exercicio 2
// a. Foi passado via query;
// b. Criando um enum somente types validos serão utilizados;
app.get("/userSearched",(req: Request, res: Response)=>{
    let errorCode = 400
    
    try {
      const { type } = req.query
      if (!type){
        errorCode = 422
            throw new Error("Informe o type para prosseguir, ADMIN ou NORMAL"); 
    }
    if(type !== "ADMIN" && type !== "NORMAL"){
      errorCode = 402
      throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL");
  }   
  const allUsers = users.filter((item)=>{
    return item.type === type
})
  res.status(201).send(allUsers)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
  
  })

//Exercicio 3
// a. Do tipo string;
// b. Não foi feito :(
app.get("/search-name",(req: Request, res: Response)=>{
    let errorCode = 400
    
    try {
      const { name } = req.query
      if (!name){
        errorCode = 422
            throw new Error("Informe um nome para prosseguir."); 
    }
  const allUsers = users.filter((item)=>{
    return item.name.toLowerCase() === name
})
  res.status(201).send(allUsers)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
  
  })













app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});