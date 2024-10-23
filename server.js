const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

//Configuração de saida para o front
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

//Rota de teste da API
app.listen(3023, () => {
    console.log("API rodando com sucesso!!")
})