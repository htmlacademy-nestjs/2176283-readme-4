export class CreateCommentDto {
  public message: string;
  public id: number;
  public userId: string;
  public postId: number;
  public createdAt: Date;
  public updatedAt: Date;
}
