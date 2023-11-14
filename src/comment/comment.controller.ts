import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService) { }

    @Get('/')
    async getComments(@Res() res) {
        const comments = await this.commentService.getComments();
        return res.status(HttpStatus.OK).json(comments);
    }

    @Get('/:commentId')
    async getComment(@Res() res, @Param('commentId', new ValidateObjectId()) commentId) {
        const comment = await this.commentService.getComment(commentId);
        if (!comment) throw new NotFoundException('Comment does not exist!');
        return res.status(HttpStatus.OK).json(comment);

    }
   
    @Post('/')
    async addComment(@Res() res, @Body() createCommentDTO: CreateCommentDTO) {
        const newComment = await this.commentService.addComment(createCommentDTO);
        return res.status(HttpStatus.OK).json({
            message: "Comment has been submitted successfully!",
            comment: newComment
        })
    }

    @Put('/edit')
    async editComment (
        @Res() res,
        @Query('commentId', new ValidateObjectId()) commentId,
        @Body() createCommentDTO: CreateCommentDTO
    ) {
        const editComment = await this.commentService.editComment(commentId, createCommentDTO);
        if (!editComment) throw new NotFoundException('comment does not exist');
        return res.status(HttpStatus.OK).json({
            messsage: 'Comment has been seccessfuly updated',
            comment: editComment
        })
    }

    @Delete('/delete')
    async delete(@Res() res, @Query('commentId', new ValidateObjectId()) commentId) {
        const deletedComment = await this.commentService.deleteComment(commentId);
        if (!deletedComment) throw new NotFoundException('comment does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'comment hes been deleted',
            comment: deletedComment
        })
    } 
}