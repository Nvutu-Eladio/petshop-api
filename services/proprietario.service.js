import proprietarioRepository from "../repositories/proprietario.repository.js";

async function createProprietario(proprietario) {
    return await proprietarioRepository.insertProprietario(proprietario);
}

async function getProprietario(){
    return await proprietarioRepository.getProprietario();
}

async function getProprietarios(id){
    return await proprietarioRepository.getProprietarios(id);
}

async function updateProprietario(proprietario){
    return await proprietarioRepository.updateProprietario(proprietario);
}

async function deleteProprietario(id){
    await proprietarioRepository.deleteProprietario(id);
}


export default {
    createProprietario,
    getProprietario,
    getProprietarios,
    updateProprietario,
    deleteProprietario
    
}