import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";

export class UserController {
  static createUser(arg0: string, createUser: any) {
    throw new Error("Método não implementado");
  }
  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      await new UserBusiness().createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
  
  // getUsers = async (res: Response): Promise<void> => {
  //   try {
  //     const users = await new UserBusiness().get();

  //     res.send(users).status(200);
  //   } catch (error: any) {
  //     res.send({ message: error.message }).status(error.status);
  //   }
  // };

  // deleteUser = () => {};
}
