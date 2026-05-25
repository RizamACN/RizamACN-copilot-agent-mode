import { Router } from 'express';
import { LeaderboardModel } from '../models/leaderboard.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const leaderboard = await LeaderboardModel.find().sort('rank').lean();
    res.json({ data: leaderboard });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load leaderboard' });
  }
});

export default router;
