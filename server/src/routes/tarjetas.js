import { Router } from 'express'
import { Tarjetas } from '../controlers/tarjetas.controller'

const router = Router();
const tarjetas = new Tarjetas()

router.post('/create', tarjetas.createTarjeta)

router.get('/all', tarjetas.getAllTarjetas)

router.put('/:id', tarjetas.modifyTarjeta)

router.delete('/:id', tarjetas.deleteTarjeta)

export default router;