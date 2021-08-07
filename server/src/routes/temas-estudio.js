import { Router } from 'express'
const router = Router();

// TODO> Implement

router.post('/create', createTemaEstudio)

router.get('/all', allTemaEstudio)

router.get('/:id', getOneTemaEstudio)

router.delete('/:id', deleteTemaEstudio)


export default router;