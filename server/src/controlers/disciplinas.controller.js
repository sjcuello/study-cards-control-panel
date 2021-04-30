function crearDisciplina(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function modificarDisciplina(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function borrarDisciplina(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function obtenerDisciplinas(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    crearDisciplina,
    modificarDisciplina,
    borrarDisciplina,
    obtenerDisciplinas
}