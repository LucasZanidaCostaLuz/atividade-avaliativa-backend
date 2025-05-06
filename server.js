require("dotenv").config();
const express = require("express");
const cors = require("cors");
const vagaRoutes = require("./src/routes/vagaRoutes")
const candidatoRoutes = require("./src/routes/candidatoRoutes")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", vagaRoutes);
app.use("/api", candidatoRoutes)

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
