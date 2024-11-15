import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express ()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// app.use(express.json({limit: " 10mb"}))
// app.use(express.urlencoded({extended:"true", limit : "10mb"}))

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(express.static("public"))
app.use(cookieParser())


import userRouter from "./routes/user.routes.js"

app.use("/api/v1/users", userRouter)


export {app}