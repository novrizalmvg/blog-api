import * as mongoose from 'mongoose';

export const HomeSchema = new mongoose.Schema({
  subtitle: String,
  name: String,
});
