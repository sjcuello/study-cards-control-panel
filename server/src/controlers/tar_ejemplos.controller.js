function createTarEjemplo(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function modifyTarEjemplo(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function deleteTarEjemplo(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function getAllTarEjemplo(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    createTarEjemplo,
    modifyTarEjemplo,
    deleteTarEjemplo,
    getAllTarEjemplo
}