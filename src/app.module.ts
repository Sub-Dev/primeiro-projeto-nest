import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://teste123:123123123@cluster0.seowqeg.mongodb.net/?retryWrites=true&w=majority'),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
