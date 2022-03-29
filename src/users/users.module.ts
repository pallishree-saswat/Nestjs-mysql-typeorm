import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from '../entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config'
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
      entities: [User],
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UsersModule {}
