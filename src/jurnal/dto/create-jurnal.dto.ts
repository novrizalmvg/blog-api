export class CreateJurnalDTO {
  readonly judul: string;
  readonly pengantar: {
    subjudul: String;
    konten: String;
  };
  readonly bagianJurnal: [
    {
      judul: String;
      isi: String;
    },
  ];
  penutup: String;
}
