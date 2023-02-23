import animalService from "../services/animal.service.js";

async function createAnimal(req, res, next){
    try {
        let animal = req.body;
        if(!animal.nome || !animal.tipo || !animal.proprietario_id){
            throw new Error("Nome, Tipo e Proprietario ID, são campos obrigatórios");
        }

        animal = await animalService.createAnimal(animal);
        res.send(animal);
        logger.info(`POST /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function getAnimals(req, res, next) {
    try {
        res.send(await animalService.getAnimals(req.params.id));
        logger.info("GET /animal")
    } catch (err) {
        next(err);
    }
}

async function getAnimal(req, res, next){
    try {
        res.send(await animalService.getAnimal(req.query.proprietario_id));
        logger.info("GET /animal")
    } catch (err) {
        next(err);
    }
}

async function updateAnimal(req, res, next){
    try {
        let animal = req.body;
        if(!animal.animal_id || !animal.nome || !animal.tipo || !animal.proprietario_id){
            throw new Error("Animal ID, Nome, Tipo e Proprietario Id são obrigatórios.")
        }
        animal = await animalService.updateAnimal(animal);
        res.send(animal);
        logger.info(`PUT /animal - ${JSON.stringify(animal)}`)
    } catch (err) {
        next(err);
    }
}

async function deleteAnimal(req, res, next){
    try {
        await animalService.deleteAnimal(req.params.id);
        res.end();
        logger.info("Delete /animal");
    } catch (err) {
        next(err);
    }
}

export default {
    createAnimal,
    getAnimal,
    getAnimals,
    updateAnimal,
    deleteAnimal
}