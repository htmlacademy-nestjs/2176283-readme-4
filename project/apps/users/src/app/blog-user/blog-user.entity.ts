import {User} from '@project/shared/app-types'
import { genSalt, hash, compare } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements User {
  public id?: string;
  public email: string;
  public name: string;
  public passwordHash: string;
  public avatar?: string;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
  }

  public toObject() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash,
      avatar: this.avatar,
    }
  }

  public fillEntity(blogUser: User) {
    this.id = blogUser.id;
    this.email = blogUser.email;
    this.name = blogUser.name;
    this.passwordHash = blogUser.passwordHash;
    this.avatar = blogUser.avatar;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
