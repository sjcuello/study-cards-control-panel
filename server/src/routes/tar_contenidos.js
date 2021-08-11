import { Router } from 'express';
import { createTarContenido, getOneTarContenido, deleteTarContenido, allTarContenido } from '../controlers/tar_contenido.controller';

const router = Router();

router.post('/create', createTarContenido);

router.get('/all', allTarContenido);

router.get('/:id', getOneTarContenido);

router.delete('/:id', deleteTarContenido);

export default router;