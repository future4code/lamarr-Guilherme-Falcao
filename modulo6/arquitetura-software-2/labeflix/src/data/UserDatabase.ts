import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }
  public getUsers = async () => {
    try {
      UserDatabase.connection.initialize();

      const allUsers = await UserDatabase.connection
        .select()
        .from("LABEFLIX_USER");

      return allUsers;
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      console.log("conexão encerrada!");
      UserDatabase.connection.destroy();
    }
  };
}
