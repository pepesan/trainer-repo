import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Trainer } from './trainer';

import { TrainerService } from './trainer.service';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}
  @Get()
  async findAll(): Promise<Trainer[]> {
    return this.trainerService.findAll();
  }

  @Post()
  async create(@Body() trainer: Trainer) {
    this.trainerService.create(trainer);
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Trainer> {
    return this.trainerService.findById(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() trainer: Trainer): Promise<Trainer> {
    return this.trainerService.updateById(id, trainer);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Trainer> {
    return this.trainerService.delete(id);
  }
}
