import mongoose, { Document, Schema, model } from 'mongoose';

export interface WorkoutAttrs {
  name: string;
  description: string;
  duration: number;
  intensity: string;
  focus: string;
  estimatedCalories: number;
}

export interface WorkoutDocument extends Document, WorkoutAttrs {}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    intensity: { type: String, required: true },
    focus: { type: String, required: true },
    estimatedCalories: { type: Number, required: true }
  },
  { timestamps: true }
);

export const WorkoutModel = model<WorkoutDocument>('Workout', workoutSchema);
