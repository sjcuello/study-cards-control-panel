import { Router } from 'express'
const router = Router();

import { TemasEstudio } from '../controlers/temas-estudio.controller';

const temas_estudio = new TemasEstudio()

router.post('/create', temas_estudio.createTemaEstudio)

router.put('/:id', temas_estudio.modifyTemaEstudio)

router.get('/:id', temas_estudio.getOneTemasEstudio)

router.delete('/:id', temas_estudio.deleteTemaEstudio)


export default router;