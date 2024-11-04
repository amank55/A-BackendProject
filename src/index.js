
import dotenv from "dotenv"

import connectDB from "./db/index.js"
import {app} from './app.js'
dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8002, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


















/*
(async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        app.on("error",(error)=>{
        console.log("Error : ", error)
        throw err
        })
    app.listen(process.env.PORT, ()=>{
        console.log(`App is starting on ${process.env.PORT}`)
    })
    } catch (error) {
        console.log("Expected Error", error)
        throw error
    }
})()
*/