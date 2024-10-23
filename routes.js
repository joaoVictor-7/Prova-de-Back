const express = require('express');
const router = express.Router();

const clientes = require('./controllers/controllerClientes');
// const telefone = require('./controllers/controllerTelefone');
// const quartos = require('./controllers/controllerQuartos');
// const reservas = require('./controllers/controllerReservas');
// const estacionamento = require('./controllers/controllerEstacionamento');

const teste = (req, res) => {
    res.json("API funcionando com sucesso");
}


router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.delete('/clientes/:id', clientes.del);      


// router.post('/telefone', telefone.create);
// router.get('/telefone', telefone.read);
// router.delete('/telefone/:id', telefone.del);



// router.post('/quartos', quartos.create);
// router.get('/quartos', quartos.read);
// router.delete('/quartos/:id', quartos.del);


// router.post('/reservas', reservas.create);
// router.get('/reservas', reservas.read);
// router.delete('/reservas/:id', reservas.del);


// router.post('/estacionamento', estacionamento.create);
// router.get('/estacionamento', estacionamento.read);
// router.delete('/estacionamento/:id', estacionamento.del);

module.exports = router;