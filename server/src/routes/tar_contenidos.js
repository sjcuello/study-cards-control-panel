import { Router } from 'express'
import { TarContenido } from '../controlers/tar_contenido.controller'

const router = Router();
const tar_contenido = new TarContenido()

router.post('/create', tar_contenido.createTarContenido)

router.get('/all', tar_contenido.allTarContenido)

router.get('/:id', tar_contenido.getOneTarContenido)

router.delete('/:id', tar_contenido.deleteTarContenido)

export default router;