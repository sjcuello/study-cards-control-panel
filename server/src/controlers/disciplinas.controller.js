import MongoLib from '../lib/mongo'
class Disciplinas {

    constructor() {
        this.collection = 'disciplinas';
        this.mongoDB = new MongoLib();
    }
    
    async createDisciplina(req, res) {
        const { nombre, color } = req.body;
        console.log('req.body :>> ', req.body);
        try {
            const resp = this.mongoDB.dummy()
            console.log('resp :>> ', resp);
            const createDisciplinaId = await this.mongoDB.create(this.collection, { nombre, color })
            res.json({ msg: 'ok', data: createDisciplinaId });
        } catch (error) {
            res.status(500).json({ msg: "Something goes wrong!", data: error })
        }
    }

    async getOneDisciplina(req, res) {
        const { id } = req.params;
        try {

            const disciplina = await this.mongoDB.get(this.collection, id);
            res.json({ msg: 'ok', data: disciplina });
        } catch (error) {
            res.status(500).json({ msg: "Something goes wrong!", data: error })
        }
    }

    modifyDisciplina(req, res) {
        console.log('req.body :>> ', req.body);
        res.send('recieved')
    }

    async deleteDisciplina(req, res) {
        const { id } = req.params;
        try {
            const disciplina = id;
            res.json({ msg: 'ok', data: disciplina });
        } catch (error) {
            res.status(500).json({ msg: "Something goes wrong!", data: error })
        }
    }

    async allDisciplinas(req, res) {
        const { tags } = req.body;
        const query = tags && { tags: { $in: tags } };
        const resp = this.mongoDB.dummy()
            console.log('resp :>> ', resp);
        const disciplinas = this.mongoDB.getAll(this.collection, query)
        res.json({ msg: 'ok', data: disciplinas });
    }
}

module.exports = Disciplinas;