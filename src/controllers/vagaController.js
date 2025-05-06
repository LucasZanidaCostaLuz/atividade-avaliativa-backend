const vagaModels = require('../models/vagaModel');

const getAllVagas = async (req, res) => {
    try {
        const vagas = await vagaModels.getAllVagas()
        res.status(200).json(vagas)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Erro ao buscar vagas"})
    }
}

const getVagaById = async (req, res) => {
    try {
        const vagas = await vagaModels.getVagaById(req.params.id)
        res.status(200).json(vagas)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Erro ao buscar vaga"})
    }
}

const createVaga = async (req, res) => {
    try {
        const {nome, numero_vagas} = req.body
        const newVaga = await vagaModels.createVaga(nome, numero_vagas)
        res.status(200).json(newVaga)
    } catch {
        console.log(error)
        res.status(500).json({message:"erro ao criar vaga"})
    }
}

const updateVaga = async (req, res) => {
    try {
        const {nome, numero_vagas} = req.body
        const updVaga = await vagaModels.updateVaga(nome, numero_vagas, req.params.id)
        res.status(200).json(updVaga)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "erro ao editar vaga"})
    }
}

const deleteVaga = async (req, res) => {
    try {
        const delVaga = await vagaModels.deleteVaga(req.params.id)
        if(delVaga.error){
            return res.status(404).json(delVaga);
        }
        res.json(delVaga)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "erro ao deletar vaga"})
    }
}

module.exports = { getAllVagas, getVagaById, createVaga, updateVaga, deleteVaga }