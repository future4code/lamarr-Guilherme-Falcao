import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

// Exercicio 1

app.get( "/teste",(req: Request, res: Response)=>{
    res.status(200).send("Hello from Express")
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
