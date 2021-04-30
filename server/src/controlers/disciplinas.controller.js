import Disciplinas from "../models/disciplinas";

async function crearDisciplina(req, res){
    const { nombre, color } = req.body

    let disciplina = await Disciplinas.create({
        nombre,
        color
    })

    res.json({msg:'ok', data: disciplina})
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