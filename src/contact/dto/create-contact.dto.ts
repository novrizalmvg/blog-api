import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateContactDTO {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly facebook: string;

    @IsNotEmpty()
    readonly twitter: string;

    @IsNotEmpty()
    readonly linkedin: string;

    @IsNotEmpty()
    readonly whatsapp: string;
}