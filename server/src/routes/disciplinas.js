import { Router } from 'express';
import { createDisciplina, deleteDisciplina, allDisciplinas, getOneDisciplina } from '../controlers/disciplinas.controller';

const router = Router();

router.post('/create', createDisciplina);

router.get('/all', allDisciplinas);

router.get('/:id', getOneDisciplina);

router.delete('/:id', deleteDisciplina);

export default router;