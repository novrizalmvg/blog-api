import { StringExpression } from 'mongoose';

export interface Jurnal extends Document {
  readonly judul: string;
  readonly pengantar: {
    subjudul: String;
    konten: String;
  };
  readonly bagianJurnal: [
    {
      judul: String;
      isi: StringExpression;
    },
  ];
  penutup: String;
}
