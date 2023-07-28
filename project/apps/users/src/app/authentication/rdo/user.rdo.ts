import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '6',
  })
  @Expose({ name: 'id'})
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'MikeWazowski@bk.ru',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Mike Wazowski',
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'User avatar',
    example: '/images/avatar.png',
  })
  @Expose()
  public avatar: string;
}
