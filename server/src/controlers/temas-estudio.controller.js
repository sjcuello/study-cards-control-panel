function crearTemaEstudio(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function modificarTemaEstudio(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function borrarTemaEstudio(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function obtenerTemasEstudio(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    crearTemaEstudio,
    modificarTemaEstudio,
    borrarTemaEstudio,
    obtenerTemasEstudio
}