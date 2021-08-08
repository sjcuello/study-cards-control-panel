import { Router } from 'express'
const router = Router();

// TODO> Implement
import  {createTarjeta, modifyTarjeta, deleteTarjeta, getAllTarjetas} from '../controlers/tarjetas.controller'


router.post('/create', createTarjeta)

router.get('/all', getAllTarjetas)

router.put('/:id', modifyTarjeta)

router.delete('/:id', deleteTarjeta)

export default router;