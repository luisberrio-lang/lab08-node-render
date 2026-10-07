const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// Definir rutas y asociarlas con controladores
router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.get("/services", mainController.services);

router.post("/contact", (req, res) => {

    const { nombre, email, mensaje } = req.body;

    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

    const escapeHTML = require("ejs").escapeXML;

    res.send(`
        <h1>Mensaje enviado correctamente</h1>
        <p><strong>Nombre:</strong> ${escapeHTML(nombre)}</p>
        <p><strong>Email:</strong> ${escapeHTML(email)}</p>
        <p><strong>Mensaje:</strong> ${escapeHTML(mensaje)}</p>
        <a href="/contact">Volver a Contacto</a>
    `);

});

module.exports = router;
