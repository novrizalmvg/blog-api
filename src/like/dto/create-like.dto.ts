import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateLikeDTO {
    @IsNotEmpty()
    readonly post_id: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly total: string;
}