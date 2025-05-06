const express = require("express")
const router = express.Router()
const vagaController = require("../controllers/vagaController")

router.get("/vagas", vagaController.getAllVagas);
router.get("/vagas/:id", vagaController.getVagaById);
router.post("/vagas", vagaController.createVaga);
router.put("/vagas/:id", vagaController.updateVaga);
router.delete("/vaga/:id", vagaController.deleteVaga);

module.exports = router