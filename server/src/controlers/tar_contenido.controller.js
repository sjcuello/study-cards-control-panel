function crearTarContenido(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function modificarTarContenido(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function borrarTarContenido(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function obtenerTarContenido(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    crearTarContenido,
    modificarTarContenido,
    borrarTarContenido,
    obtenerTarContenido
}