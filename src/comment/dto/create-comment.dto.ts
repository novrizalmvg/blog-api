import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateCommentDTO {
    @IsNotEmpty()
    readonly post_id: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly message: string;
}