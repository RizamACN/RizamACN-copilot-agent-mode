import { Router } from 'express';
import { UserModel } from '../models/user.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const users = await UserModel.find().lean();
    res.json({ data: users });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load users' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).lean();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ data: user });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load user' });
  }
});

export default router;
