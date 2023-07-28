import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@bk.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Mike Wazowski',
  })
  public name: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public password: string;

  @ApiProperty({
    description: 'User avatar',
    example: '/images/avatar.png'
  })
  public avatar: string;
}
