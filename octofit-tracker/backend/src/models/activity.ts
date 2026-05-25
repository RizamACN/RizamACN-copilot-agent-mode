import mongoose, { Document, Schema, Types, model } from 'mongoose';

export interface ActivityAttrs {
  userId: Types.ObjectId;
  type: string;
  distance: number;
  duration: number;
  calories: number;
  date: Date;
  notes: string;
}

export interface ActivityDocument extends Document, ActivityAttrs {}

const activitySchema = new Schema<ActivityDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    distance: { type: Number, required: true },
    duration: { type: Number, required: true },
    calories: { type: Number, required: true },
    date: { type: Date, required: true },
    notes: { type: String, default: '' }
  },
  { timestamps: true }
);

export const ActivityModel = model<ActivityDocument>('Activity', activitySchema);
