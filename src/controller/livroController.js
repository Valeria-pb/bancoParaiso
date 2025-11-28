const {livroModel}= require("../models/livroModel");
const livroController = {
      listarLivro: async (req, res) => {
        try {
            const { idLivro } = req.query;

            if (idLivro) {
                if (idLivro.length != 36) {
                    return res.status(400).json({ error: `Id do livro é inválido` })
                }
                const livro = await livroModel.buscarUm(idLivro);

                return res.status(200).json(livro)
            }

            const livros = await livroModel.buscarTodos();
            res.status(200).json(livros);

        } catch (error) {
            console.error('Erro ao listar livros:', error);
            res.status(500).json({ error: `Erro interno no servidor ao buscar livros.` })
        }
    },

    criarLivro: async(req, res) => {
        try {
            const {titulo, anoPublicacao, quantidadeExemplares, nomeAutor} = req.body;
            if (titulo == undefined|| anoPublicacao ==undefined || quantidadeExemplares ==undefined || nomeAutor == undefined || titulo == "" || anoPublicacao == "" || quantidadeExemplares == "" || nomeAutor == "" || isNaN(anoPublicacao) || isNaN(quantidadeExemplares)){
              return res.status(400).json({error: `Campos obrigatórios não preenchidos`});  
            }
            await livroModel.inserirLivro(titulo, anoPublicacao, quantidadeExemplares, nomeAutor);
            res.status(201).json ({message: "Livro cadastrado com sucesso"})
        } catch (error) {
            console.error('Erro ao cadastrar livro: ', error);
            res.status(500).json({error: 'Erro ao cadastrar livro.'})
            
        }
    }

};
module.exports = {livroController};