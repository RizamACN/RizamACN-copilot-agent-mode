import mongoose, { Document, Schema, model } from 'mongoose';

export interface TeamAttrs {
  name: string;
  description: string;
  members: number;
  coach: string;
}

export interface TeamDocument extends Document, TeamAttrs {}

const teamSchema = new Schema<TeamDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    members: { type: Number, required: true },
    coach: { type: String, required: true }
  },
  { timestamps: true }
);

export const TeamModel = model<TeamDocument>('Team', teamSchema);
