import {Request, Response} from "express"
import getAddress from "../services/getAddress";

  async function testAddress(req: Request, res: Response) {
    const { cep } = req.body;
console.log(cep);

  if (!cep){
    res.statusCode = 422
    throw new Error("O CEP é obrigatório")  
  }
  const result = await getAddress(cep);
  res.send (result);
}
export default testAddress;