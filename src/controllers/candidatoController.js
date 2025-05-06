const candidatoModel = require("../models/candidatoModel")

const getAllCandidatos = async (req, res) => {
    try {
        const {nivel_escolaridade} = req.query;
        const candidatos = await candidatoModel.getAllCandidatos(nivel_escolaridade)
        res.status(200).json(candidatos)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Erro ao buscar candidatos"})
    }
}

const getCandidatoById = async (req, res) => {
    try {
        const candidatos = await candidatoModel.getCanditatosById(req.params.id)
        res.status(200).json(candidatos)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Erro ao buscar candidatos"})
    }
}

const createCandidatos = async (req, res) => {
    try {
        const {nome, cpf, nivel_escolaridade, id_vaga} = req.body
        const photo = req.file ? req.file.filename : null;
        const newCandidato = await candidatoModel.createCandidatos(nome, cpf, nivel_escolaridade, id_vaga, photo)
        res.status(200).json(newCandidato)
    } catch (error){
        console.log(error)
        res.status(500).json({message:"erro ao criar candidato"})
    }
}

const updateCandidatos = async (req, res) => {
    try {
        const {nome, cpf, nivel_escolaridade, id_vaga} = req.body
        const photo = req.file ? req.file.filename : null;
        const updCandidatos = await candidatoModel.updateCandidatos(nome, cpf, nivel_escolaridade, id_vaga, photo, req.params.id)
        res.status(200).json(updCandidatos)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "erro ao editar candidato"})
    }
}

const deleteCandidatos = async (req, res) => {
    try {
        const delCandidatos = await candidatoModel.deleteCandidatos(req.params.id)
        if(delCandidatos.error){
            return res.status(404).json(delCandidatos);
        }
        res.json(delCandidatos)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "erro ao deletar candidato"})
    }
}

module.exports = {getAllCandidatos, getCandidatoById, createCandidatos, updateCandidatos, deleteCandidatos}