const express = require('express');
const router = express.Router();

module.exports = app => {

    app.get('/', (req, res) => {
        res.render("home");
    });

    app.use((req, res, next) => {
        res.status(404).render("error404")
    });
}