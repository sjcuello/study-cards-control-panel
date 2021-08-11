async function createTarContenido(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function getOneTarContenido(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function deleteTarContenido(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function allTarContenido(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    createTarContenido, 
    getOneTarContenido, 
    deleteTarContenido, 
    allTarContenido
}