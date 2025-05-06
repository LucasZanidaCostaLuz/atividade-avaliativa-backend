const express = require("express")
const router = express.Router()
const vagaController = require("../controllers/vagaController")
const upload = require("../config/upload");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware)
router.get("/vagas", vagaController.getAllVagas);
router.get("/vagas/:id", vagaController.getVagaById);
router.post("/vagas", upload.single("photo"), vagaController.createVaga);
router.put("/vagas/:id", upload.single("photo"),vagaController.updateVaga);
router.delete("/vagas/:id", vagaController.deleteVaga);

module.exports = router