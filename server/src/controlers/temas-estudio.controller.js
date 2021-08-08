function createTemaEstudio(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function modifyTemaEstudio(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function deleteTemaEstudio(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

function getOneTemasEstudio(req, res){
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

module.exports = {
    createTemaEstudio,
    modifyTemaEstudio,
    deleteTemaEstudio,
    getOneTemasEstudio
}