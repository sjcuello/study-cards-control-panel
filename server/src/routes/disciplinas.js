import { Router } from 'express'
import { crearDisciplina } from '../controlers/disciplinas.controller'
const router = Router();

router.get('/', crearDisciplina)

export default router;