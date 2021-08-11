import { Router } from 'express'
import { createTemaEstudio, modifyTemaEstudio, deleteTemaEstudio, getOneTemasEstudio } from '../controlers/temas-estudio.controller';

const router = Router();

router.post('/create', createTemaEstudio)

router.put('/:id', modifyTemaEstudio)

router.get('/:id', getOneTemasEstudio)

router.delete('/:id', deleteTemaEstudio)


export default router;