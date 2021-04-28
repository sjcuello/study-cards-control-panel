import { Router } from 'express'
import { createProject } from '../controlers/disciplinas.controller'
const router = Router();

router.get('/', createProject)

export default router;