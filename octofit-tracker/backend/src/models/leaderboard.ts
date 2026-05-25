import mongoose, { Document, Schema, model } from 'mongoose';

export interface LeaderboardAttrs {
  rank: number;
  userName: string;
  score: number;
  category: string;
}

export interface LeaderboardDocument extends Document, LeaderboardAttrs {}

const leaderboardSchema = new Schema<LeaderboardDocument>(
  {
    rank: { type: Number, required: true },
    userName: { type: String, required: true },
    score: { type: Number, required: true },
    category: { type: String, required: true }
  },
  { timestamps: true }
);

export const LeaderboardModel = model<LeaderboardDocument>('Leaderboard', leaderboardSchema);
