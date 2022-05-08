import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Rinasik:qwerty123@data.vd0po.mongodb.net/messengerData?retryWrites=true&w=majority',
      { dbName: 'todo-list', retryDelay: 100 },
    ),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
