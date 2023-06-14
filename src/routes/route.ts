import express from "express";
import loadController from "../controller/controller"

const router = express.Router()


router.post("/get-load", loadController.processLoad)
export default router;