const { sql, getconnection } = require('../config/db');
const livroModel = {
  inserirLivro: async (titulo, anoPublicacao, quantidadeExemplares, nomeAutor) => {
    try {
      const pool = await getconnection();
      const querySQL = `
        INSERT INTO Livros (titulo, anoPublicacao, quantidadeExemplares, nomeAutor)
        VALUES (@titulo, @anoPublicacao, @quantidadeExemplares, @nomeAutor)
        `
      await pool.request()
        .input("titulo", sql.NVARCHAR(100), titulo)
        .input("anoPublicacao", sql.INT, anoPublicacao)
        .input("quantidadeExemplares", sql.INT, quantidadeExemplares)
        .input("nomeAutor", sql.NVARCHAR(100), nomeAutor)
        .query(querySQL);


    } catch (error) {
      console.error("Erro ao Inserir Livro: ", error);
      throw error
    }

  }
}
module.exports = { livroModel };