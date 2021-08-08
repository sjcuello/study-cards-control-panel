import { Router } from 'express'
const router = Router();

import { createTemaEstudio, modifyTemaEstudio, getOneTemasEstudio, deleteTemaEstudio } from '../controlers/temas-estudio.controller';

router.post('/create', createTemaEstudio)

router.put('/:id', modifyTemaEstudio)

router.get('/:id', getOneTemasEstudio)

router.delete('/:id', deleteTemaEstudio)


export default router;