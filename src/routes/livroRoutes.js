const express = require('express');
const router = express.Router();
const {clienteController} = require('../controllers/clienteController');

router.get("/livros", livroController.listarClientes);
router.post("/livros", livroController.criarCliente);

module.exports ={livroRoutes: router};