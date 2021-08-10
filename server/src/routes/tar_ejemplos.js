import { Router } from 'express'
import { TarEjemplos } from '../controlers/tar_ejemplos.controller'

const router = Router();
const tar_ejemplos = new TarEjemplos()

router.post('/create', tar_ejemplos.createTarEjemplo)

router.get('/all', tar_ejemplos.getAllTarEjemplo)

router.put('/:id', tar_ejemplos.modifyTarEjemplo)

router.delete('/:id', tar_ejemplos.deleteTarEjemplo)


export default router;