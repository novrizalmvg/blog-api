import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create.post.dto';
import { ValidateObjectID } from '../shared/pipes/validate-object-id.pipes';

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) { }

    @Get('posts')
    async getPosts(@Res() res) {
        const posts = await this.blogService.getPosts();
        return res.status(HttpStatus.ok).json(posts);
    }

    @Get('post/:postID')
    async getPost(@Res() res, @Param('postId', new ValidateObjectID()) postId) {
        const post = await this.blogService.getPost(postId);
        if (!post) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.ok).json(post);

    }

    @Post('/post')
    async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
        const newPost = await this.blogService.addPost(createPostDTO);
        return res.status(HttpStatus.ok).json({
            message: "Post has been submitted successfully!",
            post: newPost
        })
    }
}