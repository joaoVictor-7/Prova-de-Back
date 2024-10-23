const con = require('../connect/connect').con;

const create = (req, res) => {
    let numero  = req.body.numero;
    let andar  = req.body.andar;
    let tipo = req.body.tipo;
    let statusQuarto  = req.body.statusQuarto;
    let cliente_id  = req.body.data_cadastro;
    let telefone_id  = req.body.telefone_id;


    let query = `INSERT INTO quartos (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES`
    query += `('${numero}', '${andar}', '${tipo}', '${statusQuarto}', '${cliente_id}', '${telefone_id}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM quartos', (err, result) => {
        if (err) {
        } else {
            res.json(result)
        }
    })
}


const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM Clientes WHERE quartos_id = '${id}'`, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            res.status(200).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    deletar
};