import * as mongoose from 'mongoose';

export const LikeSchema = new mongoose.Schema({
  post_id: String,
  email: String,
  total: String,
});
