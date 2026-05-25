import mongoose from 'mongoose';

export const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

export function configureDatabase() {
  mongoose.set('strictQuery', true);
}

export async function connectToDatabase() {
  configureDatabase();
  return mongoose.connect(mongoUri);
}
