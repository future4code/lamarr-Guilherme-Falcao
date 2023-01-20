import { app } from "./app";
import { UserController } from "./controller/UserController";
import { UserDatabase } from "./data/UserDatabase";

// app.get("/allUsers", async function () {
//   console.log("Endpoint teste");
// });

const userDatabase = new UserDatabase();
app.get("/getUsers", userDatabase.get);

const userController = new UserController();
app.post("/createUser", userController.createUser);
