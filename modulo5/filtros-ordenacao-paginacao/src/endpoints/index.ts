import express, {Request, Response} from "express"
import { connection } from "../dataBase/connection"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No user found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
 (async () => {
   console.log(await getAllUsers(8, "Chijo") )
 })()

 //a
//  export const filteredUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {
//       const users = await selectAllUsers()

//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No user found")
//       }

//       res.status(200).send(users)
      
//    } catch (error:any) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});