import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import quran from "./Routes/quran.routes.js"

app.use(express.json())
app.use(cors({
    origin: "*",
    credentials: true
}))

app.use("/api", quran)


app.listen(3000, () => {
    console.log("Conncting");
})