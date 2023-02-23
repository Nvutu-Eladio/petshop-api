import express from "express";
import animalController from "../controllers/animal.controller.js"

const router = express.Router();

router.post("/", animalController.createAnimal);
router.get("/", animalController.getAnimal);
router.get("/:id", animalController.getAnimals);
router.put("/", animalController.updateAnimal);
router.delete("/:id", animalController.deleteAnimal);


export default router;