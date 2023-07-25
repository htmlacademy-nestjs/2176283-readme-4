import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  @Expose({name: 'id'})
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public accessToken: string;
}
