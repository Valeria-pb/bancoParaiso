const sql = require("mssql"); // Importação da biblioteca MSSQL

const config = {
    user: "sa",
    password: "123456789",
    server: "localhost",
    database: "BibliotecaLerMais",
    options: { 
        encrypt: true, //Conexão já esta segura
        trustServerCertificate: true, //Ignorar se tiver erro pois não precisa de certificado

    }
};

async function getConnection() { // FUNÇÃO QUE CONECTA CONEXÕES COM O DB - FUNÇÃO ASSINCRONA (getConnection == Pegar uma conexão)
    try {

        const pool = await sql.connect(config) // Aguarda o sql conectar no DB
        return pool; // Quando realiza a conexão ele retorna ela

    } catch (error) {
        console.error(`Erro na conexão SQL Server`, error)
    }
};

module.exports = {sql, getConnection};


/*const mysql = require ('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'bancoParaiso',
    port: 3000,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit : 0
});
module.exports = pool;
*/