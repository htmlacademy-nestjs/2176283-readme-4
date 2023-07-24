import {User} from '@project/shared/app-types'

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
}
