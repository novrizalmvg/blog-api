import { IsNotEmpty } from "class-validator";

export class CreateHomeDTO {
    @IsNotEmpty()
    readonly subtitle: string;

    @IsNotEmpty()
    readonly name: string;
}