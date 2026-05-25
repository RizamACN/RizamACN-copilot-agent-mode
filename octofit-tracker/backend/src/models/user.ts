import mongoose, { Document, Schema, Types, model } from 'mongoose';

export interface UserAttrs {
  name: string;
  email: string;
  role: string;
  teamId?: Types.ObjectId;
}

export interface UserDocument extends Document, UserAttrs {}

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' }
  },
  { timestamps: true }
);

export const UserModel = model<UserDocument>('User', userSchema);
