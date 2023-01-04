import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
	client: "port",
	connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});