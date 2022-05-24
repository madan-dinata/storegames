import { Router } from 'express';
const router = Router();
import { index } from './controller.js';

router.get('/', index);

export default router;
