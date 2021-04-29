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

export default {crearTarjeta,modificarTarjeta,borrarTarjeta,obtenerTarjetas}