function crearTarEjemplo(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function modificarTarEjemplo(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function borrarTarEjemplo(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function obtenerTarEjemplo(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

export default {crearTarEjemplo,modificarTarEjemplo,borrarTarEjemplo,obtenerTarEjemplo}