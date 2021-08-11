import { dummy, getAll} from '../lib/mongo';

const collection = 'disciplinas';

async function createDisciplina(req, res) {
    const { nombre, color } = req.body;
    console.log('req.body :>> ', req.body);
    try {
        const resp = dummy()
        console.log('resp :>> ', resp);
        const createDisciplinaId = await create(collection, { nombre, color })
        res.json({ msg: 'ok', data: createDisciplinaId });
    } catch (error) {
        res.status(500).json({ msg: "Something goes wrong!", data: error })
    }
}

async function getOneDisciplina(req, res) {
    const { id } = req.params;
    try {

        const disciplina = await get(collection, id);
        res.json({ msg: 'ok', data: disciplina });
    } catch (error) {
        res.status(500).json({ msg: "Something goes wrong!", data: error })
    }
}

function modifyDisciplina(req, res) {
    console.log('req.body :>> ', req.body);
    res.send('recieved')
}

async function deleteDisciplina(req, res) {
    const { id } = req.params;
    try {
        const disciplina = id;
        res.json({ msg: 'ok', data: disciplina });
    } catch (error) {
        res.status(500).json({ msg: "Something goes wrong!", data: error })
    }
}

async function allDisciplinas(req, res) {
    console.log('mongoDB :>> ', dummy());

    try {
        const disciplinas = await getAll(collection, {})
        res.json({ msg: 'ok', data: disciplinas });
    } catch (error) {
        res.status(500).json({ msg: "Something goes wrong!", data: error })
    }
}

module.exports = {
    createDisciplina,
    modifyDisciplina,
    deleteDisciplina,
    allDisciplinas,
    getOneDisciplina
}