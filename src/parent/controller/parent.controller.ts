import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ParentI } from '../models/parent.interface';
import { ParentService } from '../service/parent.service';

@Controller('parent')
export class ParentController {
  constructor(private parentService: ParentService) {}

  @Post()
  add(@Body() parent: ParentI): Observable<ParentI> {
    return this.parentService.add(parent);
  }

  @Get()
  findAll(): Observable<ParentI[]> {
    return this.parentService.findAll();
  }
}
