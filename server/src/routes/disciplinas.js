import { Router } from 'express'
import { Disiplinas } from '../controlers/disciplinas.controller'

const router = Router();
const disiplinas = new Disiplinas()

router.post('/create', disiplinas.createDisciplina)

router.get('/all', disiplinas.allDisciplinas)

router.get('/:id', disiplinas.getOneDisciplina)

router.delete('/:id', disiplinas.deleteDisciplina)

export default router;