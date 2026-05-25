import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';

const app = express();
const port = Number(process.env.PORT || 8000);
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
const codespaceName = process.env.CODESPACE_NAME;
const apiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    status: 'OctoFit Tracker API running',
    apiUrl,
    env: {
      port,
      codespaceName: codespaceName || null
    }
  });
});

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

mongoose.set('strictQuery', true);

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB at', mongoUri);
    app.listen(port, '0.0.0.0', () => {
      console.log(`Backend server listening on http://0.0.0.0:${port}`);
      if (codespaceName) {
        console.log(`Codespaces API URL: ${apiUrl}`);
      }
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
