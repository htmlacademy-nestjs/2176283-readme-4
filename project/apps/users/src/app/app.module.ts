import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigUserModule } from '@project/config/config-users';

@Module({
  imports: [BlogUserModule, AuthenticationModule, ConfigUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
