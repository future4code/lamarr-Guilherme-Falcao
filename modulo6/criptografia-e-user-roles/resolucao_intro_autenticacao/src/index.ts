import app from "./controller/app"
import { userRouter } from "./controller/userRouter"


app.use('/user/', userRouter)
app.get("/user/profile", userRouter)