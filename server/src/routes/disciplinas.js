import { Router } from 'express'
import Disciplinas from '../controlers/disciplinas.controller'

const router = Router();
const disciplinas = new Disciplinas()

router.post('/create', disciplinas.createDisciplina)

router.get('/all', disciplinas.allDisciplinas)

router.get('/:id', disciplinas.getOneDisciplina)

router.delete('/:id', disciplinas.deleteDisciplina)

export default router;