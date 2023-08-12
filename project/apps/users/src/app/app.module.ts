import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigUserModule, getMongooseOptions } from '@project/config/config-users';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BlogUserModule,
    AuthenticationModule,
    ConfigUserModule,
    MongooseModule.forRootAsync(getMongooseOptions()
  )],
  controllers: [],
  providers: [],
})
export class AppModule {}
