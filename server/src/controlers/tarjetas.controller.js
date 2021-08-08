function createTarjeta(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function modifyTarjeta(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function deleteTarjeta(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function getAllTarjetas(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    createTarjeta,
    modifyTarjeta,
    deleteTarjeta,
    getAllTarjetas
}