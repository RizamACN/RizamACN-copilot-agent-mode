/**
 * Seed the octofit_db database with test data
 */
import mongoose from 'mongoose';
import { ActivityModel } from '../models/activity.js';
import { LeaderboardModel } from '../models/leaderboard.js';
import { TeamModel } from '../models/team.js';
import { UserModel } from '../models/user.js';
import { WorkoutModel } from '../models/workout.js';

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

async function seed() {
  console.log('Seed the octofit_db database with test data');

  await mongoose.connect(mongoUri, {
    autoIndex: true
  });

  try {
    await Promise.all([
      UserModel.deleteMany({}),
      TeamModel.deleteMany({}),
      ActivityModel.deleteMany({}),
      LeaderboardModel.deleteMany({}),
      WorkoutModel.deleteMany({})
    ]);

    const users = await UserModel.insertMany([
      {
        name: 'Avery Octo',
        email: 'avery@octofit.dev',
        role: 'athlete'
      },
      {
        name: 'Mia Swim',
        email: 'mia@octofit.dev',
        role: 'coach'
      },
      {
        name: 'Noah Pace',
        email: 'noah@octofit.dev',
        role: 'athlete'
      }
    ]);

    const teams = await TeamModel.insertMany([
      {
        name: 'OctoRunners',
        description: 'A high-energy running team focused on weekly timed mile challenges.',
        members: 14,
        coach: 'Mia Swim'
      },
      {
        name: 'Wave Warriors',
        description: 'A swim and triathlon group training for open water events.',
        members: 10,
        coach: 'Noah Pace'
      }
    ]);

    const workouts = await WorkoutModel.insertMany([
      {
        name: 'Endurance Swim',
        description: 'Steady-state laps with focus on breathing and stroke efficiency.',
        duration: 45,
        intensity: 'moderate',
        focus: 'swim endurance',
        estimatedCalories: 420
      },
      {
        name: 'Interval Run',
        description: 'High-intensity interval training on the track with recovery jogs.',
        duration: 30,
        intensity: 'high',
        focus: 'speed and stamina',
        estimatedCalories: 380
      }
    ]);

    await ActivityModel.insertMany([
      {
        userId: users[0]._id,
        type: 'run',
        distance: 6.2,
        duration: 40,
        calories: 520,
        date: new Date('2026-05-20T07:30:00Z'),
        notes: 'Morning tempo run with strong finish.'
      },
      {
        userId: users[2]._id,
        type: 'swim',
        distance: 2.0,
        duration: 50,
        calories: 460,
        date: new Date('2026-05-21T10:00:00Z'),
        notes: 'Focused on steady pacing and open water drills.'
      }
    ]);

    await LeaderboardModel.insertMany([
      {
        rank: 1,
        userName: 'Avery Octo',
        score: 980,
        category: 'Weekly Performance'
      },
      {
        rank: 2,
        userName: 'Noah Pace',
        score: 940,
        category: 'Weekly Performance'
      },
      {
        rank: 3,
        userName: 'Mia Swim',
        score: 910,
        category: 'Coaching Impact'
      }
    ]);

    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Failed to seed octofit_db:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seed().catch((error) => {
  console.error('Seed script error:', error);
  process.exit(1);
});
