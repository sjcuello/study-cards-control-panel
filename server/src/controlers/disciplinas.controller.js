import Disciplinas from "../models/disciplinas";
export class Disiplinas {

    async createDisciplina(req, res) {
        const { nombre, color } = req.body;
        try {
            let disciplina = await Disciplinas.create({
                nombre,
                color
            });
            res.json({ msg: 'ok', data: disciplina });
        } catch (error) {
            res.status(500).json({ msg: "Something goes wrong!", data: error })
        }
    }

    async getOneDisciplina(req, res) {
        const { id } = req.params;
        try {
            let disciplina = await Disciplinas.findOne({
                where: { id }
            });
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
            let disciplina = await Disciplinas.update(
                { estado: 2 },
                { where: { id } }
            );
            res.json({ msg: 'ok', data: disciplina });
        } catch (error) {
            res.status(500).json({ msg: "Something goes wrong!", data: error })
        }
    }

    async allDisciplinas(req, res) {
        // const disciplinas = await Disciplinas.findAll();
        const disciplinas = { ejemplo: 1234, disiplinas: [1, 2, 3, 4] }
        res.json({ msg: 'ok', data: disciplinas });
    }
}
