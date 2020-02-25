import * as mongoose from 'mongoose';

export const TrainerSchema = new mongoose.Schema({
  name: String,
  email: String,
  techSkills: [String],
});
