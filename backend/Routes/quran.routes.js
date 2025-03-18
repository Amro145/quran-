import express from "express"
import { GetAllQuranList, GetSurah } from "../Controller/quran.controller.js"
const Router = express.Router()

Router.get("/quran-list", GetAllQuranList)
Router.get("/surah/:id", GetSurah)

export default Router