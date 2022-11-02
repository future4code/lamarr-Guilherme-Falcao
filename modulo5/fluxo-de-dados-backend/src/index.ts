import express,{Request, Response} from "express"
import cors from 'cors'
import { products } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

//Exercício 1
app.get("/teste",(req:Request, res:Response)=>{
    res.status(201).send("Servidor rodando na porta 3003!")})

//Exercício 2
//Criado o arquivo data.ts na pasta src

//Exercício 3
//Criado o arquivo type.ts na pasta src

//Exercício 4
app.post("/new-product",(req:Request, res:Response)=>{
    const addName = req.body.name;
    const addPrice = req.body.price;

        products.push({
            id: Date.now().toString(),
            name: addName,
            price: addPrice,
        });
   
    res.status(201).send(products)})

//Exercício 5
app.get("/product-list",(req:Request, res:Response)=>{
    let productsList = products.map((item)=>{
        return item
    })
    res.status(201).send(productsList)})

//Exercício 6
app.put("/edit-product",(req:Request, res:Response)=>{
    const id = req.body.id
    const newPrice = req.body.price

    for (const i of products) {
        if (i.id === id) {
            i.price = newPrice
        }}

    res.status(201).send(products)})

//Exercício 7
app.delete("/delete",(req:Request, res:Response)=>{
    const id = req.query.id

    const delProduct = products.filter((item)=>{
        return item.id !== id
    })

    res.status(201).send(delProduct)})




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});