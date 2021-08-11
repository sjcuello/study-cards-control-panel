async function createTarEjemplo(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function modifyTarEjemplo(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function deleteTarEjemplo(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function getAllTarEjemplo(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    createTarEjemplo,
    modifyTarEjemplo,
    deleteTarEjemplo,
    getAllTarEjemplo
}