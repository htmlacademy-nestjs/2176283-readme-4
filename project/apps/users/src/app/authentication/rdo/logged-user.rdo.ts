import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

export class LoggedUserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '6',
  })
  @Expose({name: 'id'})
  @Transform(({obj}) => obj.id.toString())
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@bk.ru',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example: 'user@user.local',
  })
  @Expose()
  public accessToken: string;
}
