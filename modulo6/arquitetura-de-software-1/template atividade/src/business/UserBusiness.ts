import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
  get() {
    throw new Error("Method not implemented.");
  }
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!input.name || !input.email || !input.password) {
        throw new Error("Por favor preencha todos os campos");
      }

      if (input.email.indexOf("@") === -1) {
        throw new Error("Email inválido");
      }

      if (input.password.length < 6) {
        throw new Error("A senha deve ter 6 caracteres");
      }

      const id: string = Date.now().toString();

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  

  deleteUser = () => {};
}
