const { sql, getconnection } = require('../config/db');
const livroModel = {

  buscarTodos: async ()=> {
    try {
      const pool = await getconnection();
      const querySQL = 
      `SELECT * FROM Livros`;

      const result = await pool.request()
        .query(querySQL);

      return result.recordset;
      
    } catch (error) {
      console.error("Erro ao buscar Livros:", error)
      throw error;
      
    }
  },

  buscarUm : async (idLivro) =>{
    try {
      const pool = await getconnection();

      const querySQL = 
      `
      SELECT * FROM Livros
      WHERE  idLivro=@idLivro
      `;
      const result = await pool.request()
        .input("idLivro", sql.UniqueIdentifier, idLivro)
        .query(querySQL)
      return result.recordset;

    } catch (error) {
      console.error("Errro ao buscar livro", error);
      throw error;
    }
  },

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