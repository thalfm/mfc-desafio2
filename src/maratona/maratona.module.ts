import { Module } from '@nestjs/common';
import { MaratonaController } from './maratona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from './maratona.model';

@Module({
  imports:[
    TypeOrmModule.forFeature([Maratona])
  ],
  controllers: [MaratonaController]
})
export class MaratonaModule {}
