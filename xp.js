import { Router } from 'express';
import { getXP, updateXP } from './xpController.js';

const router = Router();
router.get('/', (req, res) => {
  res.json(getXP());
});
router.post('/', (req, res) => {
  updateXP(req.body);
  res.json({ success: true, data: getXP() });
});

export default router;