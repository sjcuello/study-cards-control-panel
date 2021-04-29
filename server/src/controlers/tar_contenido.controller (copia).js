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

export default {crearTarContenido,modificarTarContenido,borrarTarContenido,obtenerTarContenido}