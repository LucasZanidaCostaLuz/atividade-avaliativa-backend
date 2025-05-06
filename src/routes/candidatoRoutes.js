const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");
const upload = require("../config/upload")

router.get("/candidatos", candidatoController.getAllCandidatos);
router.get("/candidatos/:id", candidatoController.getCandidatoById);
router.post("/candidatos", upload.single("photo"), candidatoController.createCandidatos);
router.put("/candidatos/:id", upload.single("photo"), candidatoController.updateCandidatos);
router.delete("/candidatos/:id", candidatoController.deleteCandidatos);

module.exports = router