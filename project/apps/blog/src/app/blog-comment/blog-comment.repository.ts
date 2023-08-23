import { BlogCommentEntity } from './blog-comment.entity';
import { Comment } from '@project/shared/app-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BlogCommentRepository implements CRUDRepository<BlogCommentEntity, number, Comment> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogCommentEntity): Promise<Comment> {
      return this.prisma.comment.create({
        data: { ...item.toObject() }
      });
  }

  public async destroy(commentId: number): Promise<void> {
      await this.prisma.comment.delete({
        where: { commentId }
      });
  }

  public findById(commentId: number): Promise<Comment | null> {
      return this.prisma.comment.findFirst({
        where: { commentId }
      });
  }

  public update(commentId: number, item: BlogCommentEntity): Promise<Comment> {
    return this.prisma.comment.update({
      where: { commentId },
      data: { ...item.toObject(), commentId }
    });
  }

  public find(ids: number[] = []): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: {
        commentId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }
}
