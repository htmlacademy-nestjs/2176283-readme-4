import { Entity } from '@project/util/util-types';
import { Comment } from '@project/shared/app-types';

export class BlogCommentEntity implements Entity<BlogCommentEntity>, Comment {
  public message: string;
  public id: number;
  public userId: string;
  public postId: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(comment: Comment) {
    this.fillEntity(comment);
  }

  public fillEntity(entity: Comment) {
    this.message = entity.message;
    this.id = entity.id;
    this.userId = entity.userId;
    this.postId = entity.postId;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }

  public toObject(): BlogCommentEntity {
    return { ...this }
  }
}
