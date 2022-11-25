// EXERCICIO 2
import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS user_adress (
         CEP VARCHAR(255) PRIMARY KEY,
         Logradouro VARCHAR(255) NOT NULL,
         Número VARCHAR(255) NOT NULL,
         Complemento VARCHAR(255) NOT NULL,
         Bairro VARCHAR(255) NOT NULL,
         Cidade VARCHAR(255) NOT NULL,
         Estado VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .finally(closeConnection)