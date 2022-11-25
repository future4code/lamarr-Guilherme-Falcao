import app from "./app"
import testAddress from "./endpoints/testAddress";
import { getFullAddress } from "./services/getAddress";

app.post("/test", testAddress);
app.post("/userfulladdress", getFullAddress);