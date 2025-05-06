const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");

router.get("/candidatos", candidatoController.getAllCandidatos);
router.get("/candidatos/:id", candidatoController.getCandidatoById);
router.post("/candidatos", candidatoController.createCandidatos);
router.put("/candidatos/:id", candidatoController.updateCandidatos);
router.put("/candidatos/:id", candidatoController.deleteCandidatos);

module.exports = router