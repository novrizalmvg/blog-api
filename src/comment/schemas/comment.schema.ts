import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    post_id: String,
    email: String,
    message: String,
})