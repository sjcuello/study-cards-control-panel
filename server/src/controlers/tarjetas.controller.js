async function createTarjeta(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function modifyTarjeta(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function deleteTarjeta(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function getAllTarjetas(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    createTarjeta,
    modifyTarjeta,
    deleteTarjeta,
    getAllTarjetas
}