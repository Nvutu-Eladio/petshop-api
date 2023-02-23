import animalRepository from "../repositories/animal.repository.js";
import proprietarioRepository from "../repositories/proprietario.repository.js";

async function createAnimal(animal) {
    return await animalRepository.insertAnimal(animal);
}

async function getAnimals(id){
    return await animalRepository.getAnimals(id);
}

async function getAnimal(proprietarioId){
    if(proprietarioId) {
        return await animalRepository.getAnimalsByProprietarioId(proprietarioId);
    }
        return await animalRepository.getAnimal();
}

async function updateAnimal(animal){
    return await animalRepository.updateAnimal(animal);
}

async function deleteAnimal(id){
    await animalRepository.deleteAnimal(id);
}


export default {
    createAnimal,
    getAnimal,
    getAnimals,
    updateAnimal,
    deleteAnimal,
    
    
}