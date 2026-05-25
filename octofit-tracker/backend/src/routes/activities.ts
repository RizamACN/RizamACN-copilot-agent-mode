import { Router } from 'express';
import { ActivityModel } from '../models/activity.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const activities = await ActivityModel.find().lean();
    res.json({ data: activities });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load activities' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const activity = await ActivityModel.findById(req.params.id).lean();
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    res.json({ data: activity });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load activity' });
  }
});

export default router;
