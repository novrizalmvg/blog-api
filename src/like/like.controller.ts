import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDTO } from './dto/create-like.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('like')
export class LikeController {
    constructor(private likeService: LikeService) { }

    @Get('/')
    async getlikes(@Res() res) {
        const likes = await this.likeService.getLikes();
        return res.status(HttpStatus.OK).json(likes);
    }

    @Get('/:likeId')
    async getLike(@Res() res, @Param('likeId', new ValidateObjectId()) likeId) {
        const like = await this.likeService.getLike(likeId);
        if (!like) throw new NotFoundException('Like does not exist!');
        return res.status(HttpStatus.OK).json(like);

    }

    @Post('/')
    async addlike(@Res() res, @Body() createLikeDTO: CreateLikeDTO) {
        const newLike = await this.likeService.addLike(createLikeDTO);
        return res.status(HttpStatus.OK).json({
            message: "Like has been submitted successfully!",
            like: newLike
        })
    }

    @Put('/edit')
    async editLike (
        @Res() res,
        @Query('likeId', new ValidateObjectId()) likeId,
        @Body() createLikeDTO: CreateLikeDTO
    ) {
        const editLike = await this.likeService.editLike(likeId, createLikeDTO);
        if (!editLike) throw new NotFoundException('like does not exist');
        return res.status(HttpStatus.OK).json({
            messsage: 'Like has been seccessfuly updated',
            like: editLike
        })
    }

    @Delete('/delete')
    async deleteLike(@Res() res, @Query('likeID', new ValidateObjectId()) likeId) {
        const deletedLike = await this.likeService.deleteLike(likeId);
        if (!deletedLike) throw new NotFoundException('like does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'like hes been deleted',
            like: deletedLike
        })
    } 
}