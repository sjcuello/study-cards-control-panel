import { Router } from 'express';
import { createTarjeta, modifyTarjeta, deleteTarjeta, getAllTarjetas } from '../controlers/tarjetas.controller';

const router = Router();

router.post('/create', createTarjeta);

router.get('/all', getAllTarjetas);

router.put('/:id', modifyTarjeta);

router.delete('/:id', deleteTarjeta);

export default router;