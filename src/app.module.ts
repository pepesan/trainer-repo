import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainerModule } from './trainer/trainer/trainer.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true }), TrainerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
