const express = require('express');
const router = express.Router();

module.exports = app => {
    app.get('/carrito', (req, res) => {
        res.render("carro");
    });
    app.get('/pago', (req, res) => {
        res.render("pagos");
    });
    app.get('/', (req, res) => {
        res.render("home");
    });
    app.use((req, res, next) => {
        res.status(404).render("error404")
    });
}