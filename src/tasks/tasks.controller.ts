import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDTO } from './tasks.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TasksService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  async create(@Body() createTaskDTO: CreateTaskDTO) {
    const title = createTaskDTO.title;
    await this.service.create(title);
    return { message: 'ok' };
  }
}
