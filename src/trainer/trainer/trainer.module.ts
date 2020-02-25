import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainerSchema } from './schema/Trainer.schema';
import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Trainer', schema: TrainerSchema }])],
  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainerModule {
}
