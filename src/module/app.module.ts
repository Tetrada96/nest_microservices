import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ envFilePath: '.env.example' }),
    DatabaseModule,
  ],
})
export class AppModule {}
