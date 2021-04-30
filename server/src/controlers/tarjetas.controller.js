function crearTarjeta(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function modificarTarjeta(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function borrarTarjeta(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function obtenerTarjetas(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    crearTarjeta,
    modificarTarjeta,
    borrarTarjeta,
    obtenerTarjetas
}