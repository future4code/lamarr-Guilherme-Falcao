import { User } from './User';
import { Knex } from "knex";

export class UserDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertUser=async(newUser:User)=>{
       await this.connection("Labe_Users").insert(newUser);
    }
    public getUsers=async()=>{
       const result= await this.connection("Labe_Users").select();
       return result;
    }
}