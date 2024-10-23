const con = require('../connect/connect').con;

const create = (req, res) => {
    let numero = req.body.numero;
    let tipo = req.body.enum;




    let query = `INSERT INTO Telefone (numero, enum) VALUES`
    query += `('${numero}', '${tipo}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM Telefone', (err, result) => {
        if (err) {
        } else {
            res.json(result)
        }
    })
}


const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM telefone WHERE telefone_id = '${id}'`, (err, result) => {
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