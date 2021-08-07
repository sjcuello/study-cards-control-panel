import { Router } from 'express'
const router = Router();

// TODO> Implement

router.post('/create', createTarjeta)

router.get('/all', allTarjeta)

router.get('/:id', getOneTarjeta)

router.delete('/:id', deleteTarjeta)

export default router;