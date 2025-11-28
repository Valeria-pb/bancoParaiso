const express = require('express');
const app = express();
const port = 3000; 

const livroRoutes = require('./src/routes/livroRoutes');


app.use(express.json());
app.use("/",livroRoutes );


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    
});