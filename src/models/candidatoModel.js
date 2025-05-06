const pool = require("../config/database.js");

const getAllCandidatos = async (nivel_escolaridade) => {
    if(!nivel_escolaridade){
        const result = await pool.query("SELECT candidato.*, vaga.nome AS candidato_vagas FROM candidato LEFT JOIN vaga ON candidato.id_vaga = vaga.id")
        return result.rows
    } else {
        const result = await pool.query("SELECT candidato.*, vaga.nome AS candidato_vagas FROM candidato LEFT JOIN vaga ON candidato.id_vaga = vaga.id WHERE nivel_escolaridade ILIKE $1", [`%${nivel_escolaridade}%`])
        return result.rows
    }
}

const getCanditatosById = async (id) => {
    const result = await pool.query("SELECT candidato.*, vaga.nome AS candidato_vagas FROM candidato LEFT JOIN vaga ON candidato.id_vaga = vaga.id WHERE candidato.id = $1", [id])
    return result.rows[0]
}

const createCandidatos = async (nome, cpf, nivel_escolaridade, id_vaga) => {
    const result = await pool.query("INSERT INTO candidato (nome, cpf, nivel_escolaridade, id_vaga) VALUES ($1, $2, $3, $4) RETURNING *", [nome, cpf, nivel_escolaridade, id_vaga])
    return result.rows
}

const updateCandidatos = async (nome, cpf, nivel_escolaridade, id_vaga, id) => {
    const result = await pool.query("UPDATE candidato SET nome = $1, cpf = $2, nivel_escolaridade = $3, id_vaga = $4 WHERE id = $5", [nome, cpf, nivel_escolaridade, id_vaga, id])
    return result.rows
}

const deleteCandidatos = async (id) => {
    const result = await pool.query("DELETE FROM candidato WHERE id = $1 RETURNING *", [id])
    if( result.rowCount === 0) {
        return {error: "Candidato não encontrado"}
    }
    return {message: "Candidato apagado com sucesso"}
}

module.exports = {getAllCandidatos, getCanditatosById, createCandidatos, updateCandidatos, deleteCandidatos}