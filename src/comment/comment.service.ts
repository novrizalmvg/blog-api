import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './interfaces/comment.interface';
import { CreateCommentDTO } from './dto/create-comment.dto';

@Injectable()
export class CommentService {

    constructor(@InjectModel('Comment') private readonly commentModel: Model<Comment>) { }

    async getComments(): Promise<Comment[]> {
        const comments = await this.commentModel.find().exec();
        return comments;
    }

    async getComment(commentID): Promise<Comment> {
        const comment = await this.commentModel
            .findById(commentID)
            .exec();
        return comment;
    }

    async addComment(createCommentDTO: CreateCommentDTO): Promise<Comment> {
        const newComment = new this.commentModel(createCommentDTO);
        return newComment.save();
    }

    async editComment(commentID, createCommentDTO: CreateCommentDTO): Promise<Comment> {
        const editedComment = await this.commentModel
            .findByIdAndUpdate(commentID, createCommentDTO, { new: true });
        return editedComment;
    }

    async deleteComment(commentID): Promise<any> {
        const deletedcomment = await this.commentModel
            .findByIdAndRemove(commentID);
        return deletedcomment;
    }

}