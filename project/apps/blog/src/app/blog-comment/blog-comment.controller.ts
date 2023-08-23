import { BlogCommentService } from './blog-comment.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { fillObject } from '@project/util/util-core';
import { CommentRdo } from './rdo/comment.rdo';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('categories')
export class BlogCommentController {
  constructor(
    private readonly blogCommentService: BlogCommentService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const commentId = parseInt(id, 10);
    const existComment = await this.blogCommentService.getComment(commentId);
    return fillObject(CommentRdo, existComment);
  }

  @Get('/')
  async index() {
    const comments = await this.blogCommentService.getComments();
    return fillObject(CommentRdo, comments);
  }

  @Post('/')
  async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.blogCommentService.createComment(dto);
    return fillObject(CommentRdo, newComment);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const commentId = parseInt(id, 10);
    this.blogCommentService.deleteComment(commentId);
  }
}
