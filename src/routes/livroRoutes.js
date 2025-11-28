const express = require('express');
const router = express.Router();
const {livroController} = require('../controller/livroController');

router.get("/livros", livroController.listarLivro);
router.post("/livros", livroController.criarLivro);

module.exports ={livroRoutes: router};