import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Like } from './interfaces/like.interface';
import { CreateLikeDTO } from './dto/create-like.dto';

@Injectable()
export class LikeService {

    constructor(@InjectModel('Like') private readonly likeModel: Model<Like>) { }

    async getLikes(): Promise<Like[]> {
        const likes = await this.likeModel.find().exec();
        return likes;
    }

    async getLike(likeId): Promise<Like> {
        const like = await this.likeModel
            .findById(likeId)
            .exec();
        return like;
    }

    async addLike(createLikeDTO: CreateLikeDTO): Promise<Like> {
        const newLike = new this.likeModel(createLikeDTO);
        return newLike.save();
    }

    async editLike(likeID, createLikeDTO: CreateLikeDTO): Promise<Like> {
        const editedLike = await this.likeModel
            .findByIdAndUpdate(likeID, createLikeDTO, { new: true });
        return editedLike;
    }

    async deleteLike(likeId): Promise<any> {
        const deletedLike = await this.likeModel
            .findByIdAndRemove(likeId);
        return deletedLike;
    }

}