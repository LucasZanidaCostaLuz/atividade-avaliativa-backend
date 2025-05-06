const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware)
router.get("/candidatos", candidatoController.getAllCandidatos);
router.get("/candidatos/:id", candidatoController.getCandidatoById);
router.post("/candidatos", candidatoController.createCandidatos);
router.put("/candidatos/:id", candidatoController.updateCandidatos);
router.delete("/candidatos/:id", candidatoController.deleteCandidatos);

module.exports = router