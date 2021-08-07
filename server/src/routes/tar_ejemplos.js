import { Router } from 'express'
const router = Router();

// TODO> Implement

router.post('/create', createContenido)

router.get('/all', allContenido)

router.get('/:id', getOnecontenido)

router.delete('/:id', deleteContenido)


export default router;