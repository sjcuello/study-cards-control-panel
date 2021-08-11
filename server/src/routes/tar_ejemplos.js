import { Router } from 'express';
import { createTarEjemplo, modifyTarEjemplo, deleteTarEjemplo, getAllTarEjemplo } from '../controlers/tar_ejemplos.controller';

const router = Router();

router.post('/create', createTarEjemplo);

router.get('/all', getAllTarEjemplo);

router.put('/:id', modifyTarEjemplo);

router.delete('/:id', deleteTarEjemplo);


export default router;