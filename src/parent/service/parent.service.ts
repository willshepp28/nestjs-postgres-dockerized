import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { ParentEntity } from '../models/parent.entity';
import { ParentI } from '../models/parent.interface';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(ParentEntity)
    private parentRepository: Repository<ParentEntity>,
  ) {}

  add(parent: ParentI): Observable<ParentI> {
    return from(this.parentRepository.save(parent));
  }

  findAll(): Observable<ParentI[]> {
    return from(this.parentRepository.find());
  }
}
