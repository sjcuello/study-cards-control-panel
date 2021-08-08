import { Router } from 'express'
const router = Router();

import { createTarContenido, allTarContenido, getOneTarContenido, deleteTarContenido } from '../controlers/tar_contenido.controller'

router.post('/create', createTarContenido)

router.get('/all', allTarContenido)

router.get('/:id', getOneTarContenido)

router.delete('/:id', deleteTarContenido)

export default router;