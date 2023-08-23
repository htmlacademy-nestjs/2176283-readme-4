import { BlogCommentController } from './blog-comment.controller';
import { BlogCommentService } from './blog-comment.service';
import { BlogCommentRepository } from './blog-comment.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BlogCommentController],
  providers: [BlogCommentService, BlogCommentRepository],
  exports: [BlogCommentRepository]
})

export class BlogCommentModule {}
