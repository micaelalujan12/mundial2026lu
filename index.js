
// 1. Importamps Express (para iniciaar el servidor)
const express = require('express');

// 2. Importamos Mongoose (para conectarnos a la base de datos)
const mongoose = require('mongoose');

// 3. Importamos nodemon (para reiniciar el servidor automáticamente)
const nodemon = require('nodemon');

// 4. Importamos path (para manejar rutas de archivos)
const path = require('path');

// 5. Importamos hbs (para renderizar vistas)
const hbs = require('hbs');

//=============================================
// Inicializamos app y el puerto
//=============================================
const app = express();
const port = process.env.PORT || 3000;

// 7. Configuramos la recepción de datos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

// Conexión a MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mundial")
.then(() => console.log("MongoDB conectado"))
.catch(err => console.log(err));

// Home
app.get("/", (req, res) => {
    res.render("home");
});

// Página participantes
app.get("/participantes", (req, res) => {
    res.render("Part");
});

// Página Estados Unidos
app.get("/Estadosunidos", (req, res) => {
    res.render("EEUU");
});

// Página México
app.get("/Mexico", (req, res) => {
    res.render("MEX");
});

// Página Canadá
app.get("/Canada", (req, res) => {
    res.render("CAN");
});

app.get("/agregar", (req, res) => {
    res.render("agregar");
});

app.get("/EEUU", (req, res) => {
    res.render("EEUU");
});

//===============================================================
// Levantamos la app
//===============================================================
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});

