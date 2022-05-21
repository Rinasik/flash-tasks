import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth, UserId } from 'src/auth/auth.decorator';
import { CreateTaskDto } from './dto/create-task.dto';
import { PatchTaskDto } from './dto/patch-task.dto';
import { ReplaceTaskRequestPayloadDto } from './dto/replace-task.dto';
import { TaskResponseDto } from './dto/task-response.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @Auth()
  createTask(@Body() createTaskDto: CreateTaskDto, @UserId() userId: string) {
    return this.tasksService.createTask(createTaskDto, userId);
  }

  @Post('replaceColumn')
  @Auth()
  replaceTask(@Body() replaceTaskDto: ReplaceTaskRequestPayloadDto) {
    return this.tasksService.replaceTaskColumn(replaceTaskDto);
  }

  @Get(':id')
  @Auth()
  @ApiResponse({ type: TaskResponseDto })
  getTask(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Delete(':id')
  @Auth()
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  @Auth()
  patchTask(@Param('id') id: string, @Body() patchTaskDto: PatchTaskDto) {
    return this.tasksService.patchTask(id, patchTaskDto);
  }
}
