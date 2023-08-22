import { Like } from './like.interface';
import { Comment } from './comment.interface';

export interface Post {
  id?: number;
  type: string;
  userId: string;
  createdAt?: Date;
  publishedAt?: Date;
  state: string;
  likesCount: number;
  commentsCount: number;
  title?: string;
  url?: string;
  tag?: string;
  preview?: string;
  text?: string;
  author?: string;
  photo?: string;
  description?: string;
  comments: Comment[];
  likes: Like[];
}
