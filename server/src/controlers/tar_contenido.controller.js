function createTarContenido(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function getOneTarContenido(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function deleteTarContenido(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function allTarContenido(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    createTarContenido,
    getOneTarContenido,
    deleteTarContenido,
    allTarContenido
}