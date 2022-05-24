import { Router } from 'express';
const router = Router();
import { index, viewCreate } from './controller.js';

router.get('/', index);
router.get('/create', viewCreate);

export default router;
