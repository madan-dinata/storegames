import { Router } from 'express';
const router = Router();
import { index, viewCreate, actionCreate } from './controller.js';

router.get('/', index);
router.get('/create', viewCreate);
router.post('/create', actionCreate);
// router.get('/update/:id', viewUpdate);
// router.put('/update/:id', actionUpdate);
// router.delete('/delete/:id', actionDelete);

export default router;
