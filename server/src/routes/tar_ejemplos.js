import { Router } from 'express'
const router = Router();

// TODO> Implement

import {createTarEjemplo, modifyTarEjemplo, deleteTarEjemplo, getAllTarEjemplo} from '../controlers/tar_ejemplos.controller'

router.post('/create', createTarEjemplo)

router.get('/all', getAllTarEjemplo)

router.put('/:id', modifyTarEjemplo)

router.delete('/:id', deleteTarEjemplo)


export default router;