import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = Number(process.env.PORT || 8000);
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit';

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('OctoFit Tracker API running');
});

mongoose.set('strictQuery', true);

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB at', mongoUri);
    app.listen(port, '0.0.0.0', () => {
      console.log(`Backend server listening on http://0.0.0.0:${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
