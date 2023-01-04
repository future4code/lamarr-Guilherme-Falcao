import {Request, Response} from "express"
import { getFullAddress } from "../services/getAddress";

  async function fullAddress(req: Request, res: Response) {
    const { cep } = req.body;
console.log(cep);

  if (!cep){
    res.statusCode = 422
    throw new Error("O CEP é obrigatório")  
  }
  const result = await getFullAddress(cep);
  res.send (result);
}
export default fullAddress;