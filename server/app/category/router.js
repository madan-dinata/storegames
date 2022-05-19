import { Router } from 'express';
const router = Router();

router.get('/category', (req, res) => {
  res.render('index');
});

export default router;
