import { Router } from 'express';
import { WorkoutModel } from '../models/workout.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const workouts = await WorkoutModel.find().lean();
    res.json({ data: workouts });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load workouts' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const workout = await WorkoutModel.findById(req.params.id).lean();
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json({ data: workout });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load workout' });
  }
});

export default router;
