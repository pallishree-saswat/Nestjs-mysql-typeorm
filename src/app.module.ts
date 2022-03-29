import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entity/user.entity';
import { UsersModule } from './users/users.module';

import {ConfigModule} from '@nestjs/config'
import { SuperAdminModule } from './super-admin/super-admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
     envFilePath:['.env', '.dev.env'],
     isGlobal:true
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'user-crud',
      // entities: [User],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    SuperAdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
