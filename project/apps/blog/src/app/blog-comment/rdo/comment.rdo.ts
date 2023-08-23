import { Expose } from 'class-transformer';

export class CommentRdo {
  @Expose()
  public message: string;

  @Expose()
  public id: number;

  @Expose()
  public userId: string;

  @Expose()
  public postId: number;

  @Expose()
  public createdAt: Date;
}
