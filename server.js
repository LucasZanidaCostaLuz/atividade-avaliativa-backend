require("dotenv").config();
const express = require("express");
const cors = require("cors");
const vagaRoutes = require("./src/routes/vagaRoutes")
const candidatoRoutes = require("./src/routes/candidatoRoutes")
const path = require("path");
const reportRoutes = require ("./src/routes/reportRoutes")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", reportRoutes)
app.use("/api", vagaRoutes);
app.use("/api", candidatoRoutes)

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
