import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Trainer } from './trainer';

@Injectable()
export class TrainerService {
  constructor(@InjectModel('Trainer') private readonly trainerModel: Model<Trainer>) {}

  async findAll(numPage: number = 0, numElem: number = 10): Promise<Trainer[]> {
    return this.trainerModel.find().skip(numElem * numPage).limit(+numElem).exec();
  }
  async create(trainer: Trainer): Promise<Trainer> {
    const createdTrainer = new this.trainerModel(trainer);
    await createdTrainer.save();
    return createdTrainer;
  }
  async findById(id: string): Promise<Trainer> {
    return await this.trainerModel.findById(id);
  }

  async updateById(id: string, trainer: Trainer): Promise<Trainer> {
    const cambios = { name: trainer.name, email: trainer.email, techSkills: trainer.techSkills};
    await this.trainerModel.updateOne({ _id : id }, cambios);
    return await this.trainerModel.findById(id);
  }

  async delete(id: string): Promise<Trainer> {
    const trainerG = await this.trainerModel.findById(id);
    await this.trainerModel.findOneAndRemove({ _id : id }, {useFindAndModify: false});
    return trainerG;
  }
}
