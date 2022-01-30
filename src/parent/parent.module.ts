import { Module } from '@nestjs/common';
import { ParentService } from './service/parent.service';
import { ParentController } from './controller/parent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentEntity } from './models/parent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParentEntity])],
  providers: [ParentService],
  controllers: [ParentController],
})
export class ParentModule {}
