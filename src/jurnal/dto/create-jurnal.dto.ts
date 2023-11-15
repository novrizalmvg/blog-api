import { IsNotEmpty } from "class-validator";

export class CreateJurnalDTO {
  @IsNotEmpty()
  readonly judul: string;

  @IsNotEmpty()
  readonly pengantar: {
    subjudul: String;
    konten: String;
  };
  @IsNotEmpty()
  readonly bagianJurnal: [
    {
      judul: String;
      isi: String;
    },
  ];
  penutup: String;
}
