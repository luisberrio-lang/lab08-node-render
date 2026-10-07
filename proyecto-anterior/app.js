const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

// Configurar el motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, "public")));

// Importar rutas
app.use(express.urlencoded({ extended: true }));

const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

app.use((req, res) => {
    res.status(404).render("404");
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () =>
    console.log(`Servidor en http://localhost:${PORT}`)
);
