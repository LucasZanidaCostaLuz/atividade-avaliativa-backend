const pool = require("../config/database.js");

const getAllVagas = async () => {
    const result = await pool.query("SELECT * FROM vaga")
    return result.rows
}

const getVagaById = async (id) => {
    const result = await pool.query("SELECT * FROM vaga WHERE id = $1", [id])
    return result.rows[0]
}

const createVaga = async (nome, numero_vagas, photo) => {
    const result = await pool.query("INSERT INTO vaga (nome, numero_vagas, photo) VALUES ($1, $2, $3) RETURNING *", [nome, numero_vagas, photo])
    return result.rows
}

const updateVaga = async (nome, numero_vagas, photo, id) => {
    const result = await pool.query("UPDATE vaga SET nome = $1, numero_vagas = $2, photo = $3 WHERE id = $4 RETURNING *", [nome, numero_vagas, photo, id])
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