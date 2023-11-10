import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
  email: String,
  facebook: String,
  twitter: String,
  linkedin: String,
  whatsapp: String,
});
