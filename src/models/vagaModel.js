const pool = require("../config/database.js");

const getAllVagas = async () => {
    const result = await pool.query("SELECT * FROM vaga")
    return result.rows
}

const getVagaById = async (id) => {
    const result = await pool.query("SELECT * FROM vaga WHERE id = $1", [id])
    return result.rows[0]
}

const createVaga = async (nome, numero_vagas) => {
    const result = await pool.query("INSERT INTO vaga (nome, numero_vagas) VALUES ($1, $2) RETURNING *", [nome, numero_vagas])
    return result.rows
}

const updateVaga = async (nome, numero_vagas, id) => {
    const result = await pool.query("UPDATE vaga SET nome = $1, numero_vagas = $2 WHERE id = $3", [nome, numero_vagas, id])
    return result.rows
}

const deleteVaga = async (id) => {
    const result = await pool.query("DELETE FROM vaga WHERE id = $1 RETURNING *", [id])
    if( result.rowCount === 0) {
        return {error: "Vaga não encontrada"}
    }
    return {message: "Vaga apagada com sucesso"}
}

module.exports = {getAllVagas, getVagaById, createVaga, updateVaga, deleteVaga}