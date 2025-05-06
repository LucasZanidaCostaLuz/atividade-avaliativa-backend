const PDFDocument = require("pdfkit");

const candidatoModel = require("../models/candidatoModel")

const exportPostPDF = async (req, res) => {
    try {
        const users = await candidatoModel.getAllCandidatos();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=users.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        doc.fontSize(20).text("Relatorio de Candidatos", {align: "center"});
        doc.moveDown();

        doc.fontSize(17).text("id | nome | cpf | escolaridade | id da vaga", {underline: true});
        doc.moveDown(0.5);

        users.forEach((candidato) => {
            doc.text(
                `${candidato.id} | ${candidato.nome} | ${candidato.cpf} | ${candidato.nivel_escolaridade} | ${candidato.id_vaga}`
            );
        });

        doc.end()
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ message: "Erro ao gerar o PDF" });
        }
    }
};

module.exports = { exportPostPDF };