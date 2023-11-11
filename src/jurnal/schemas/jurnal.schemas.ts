import * as mongoose from 'mongoose';

export const JurnalSchema = new mongoose.Schema({
  judul: String,
  isi: String,
});