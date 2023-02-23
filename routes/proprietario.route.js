import express from "express";
import proprietarioController from "../controllers/proprietario.controller.js"

const router = express.Router();

router.post("/", proprietarioController.createProprietario);
router.get("/", proprietarioController.getProprietario);
router.get("/:id", proprietarioController.getProprietarios);
router.put("/", proprietarioController.updateProprietario);
router.delete("/:id", proprietarioController.deleteProprietario);


export default router;