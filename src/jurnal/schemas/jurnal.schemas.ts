import * as mongoose from 'mongoose';

export const JurnalSchema = new mongoose.Schema({
  judul: String,
  pengantar: {
    subjudul: String,
    konten: String,
  },
  bagianJurnal: [
    {
      judul: String,
      isi: String,
    },
  ],
  penutup: String,
});
