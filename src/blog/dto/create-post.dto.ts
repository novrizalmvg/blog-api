import { IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreatePostDTO {
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly description: string;

    @IsNotEmpty()
    readonly body: string;

    @IsNotEmpty()
    readonly path: string;

    @IsNotEmpty()
    readonly author: string;

    @IsNotEmpty()
    @Transform(({ value }) => new Date(value))
    readonly date_posted: Date;
}