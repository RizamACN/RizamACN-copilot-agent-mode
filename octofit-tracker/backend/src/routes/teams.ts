import { Router } from 'express';
import { TeamModel } from '../models/team.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const teams = await TeamModel.find().lean();
    res.json({ data: teams });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load teams' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const team = await TeamModel.findById(req.params.id).lean();
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json({ data: team });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load team' });
  }
});

export default router;
