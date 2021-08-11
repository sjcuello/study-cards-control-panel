async function createTemaEstudio(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function modifyTemaEstudio(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function deleteTemaEstudio(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function getOneTemasEstudio(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}
module.exports = {
    createTemaEstudio,
    modifyTemaEstudio,
    deleteTemaEstudio,
    getOneTemasEstudio
}