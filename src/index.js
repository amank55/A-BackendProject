
import dotenv from "dotenv"

import connectDB from "./db/index.js"

dotenv.config({
    path: './.env'
})

connectDB()




 



















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