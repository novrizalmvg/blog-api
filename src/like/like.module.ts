import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeSchema } from './schemas/like.schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Like', schema: LikeSchema }])
    ],
    controllers: [LikeController],
    providers: [LikeService]
})

export class LikeModule {}