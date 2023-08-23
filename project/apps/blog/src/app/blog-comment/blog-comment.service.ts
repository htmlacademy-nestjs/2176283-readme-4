import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from '@project/shared/app-types';
import { BlogCommentRepository } from './blog-comment.repository';
import { Injectable } from '@nestjs/common';
import { BlogCommentEntity } from './blog-comment.entity';

@Injectable()
export class BlogCommentService {
  constructor(
    private readonly blogCommentRepository: BlogCommentRepository
  ) {}

  async createComment(dto: CreateCommentDto): Promise<Comment> {
    const categoryEntity = new BlogCommentEntity(dto);
    return this.blogCommentRepository.create(categoryEntity);
  }

  async deleteComment(id: number): Promise<void> {
    this.blogCommentRepository.destroy(id);
  }

  async getComment(id: number): Promise<Comment> {
    return this.blogCommentRepository.findById(id);
  }

  async getComments(): Promise<Comment[]> {
    return this.blogCommentRepository.find();
  }
}

