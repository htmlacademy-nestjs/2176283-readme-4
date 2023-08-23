export interface Comment {
  message: string;
  id?: number;
  userId: string;
  postId?: number;
  createdAt: Date;
  updatedAt: Date;
}
