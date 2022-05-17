import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeskDocument } from 'src/desks/schemas/desk.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { ReplaceTaskRequestPayloadDto } from './dto/replace-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<TaskDocument>,
    @InjectModel('Desk') private readonly deskModel: Model<DeskDocument>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto, userId: string) {
    const desk = await this.deskModel
      .findById(createTaskDto.deskId)
      .catch(() => {
        throw new HttpException('No such a desk', HttpStatus.NOT_FOUND);
      });

    if (!desk) {
      throw new HttpException('Desk not found', HttpStatus.NOT_FOUND);
    }

    const newTask = new this.taskModel({
      title: createTaskDto.title,
      description: createTaskDto.description,
      creator: userId,
      desk: createTaskDto.deskId,
      column: createTaskDto.columnId,
    });

    const task = await newTask.save().catch(() => {
      throw new HttpException('No such a desk column', HttpStatus.NOT_FOUND);
    });

    desk.columns = desk.columns.map((elem) =>
      elem._id === createTaskDto.columnId
        ? { ...elem, tasks: [...elem.tasks, task._id] }
        : elem,
    );

    return task;
  }

  async getTasksByDesk(deskId: string): Promise<Task[]> {
    return await this.taskModel.find({ desk: deskId });
  }

  async replaceTaskColumn(replaceTaskDto: ReplaceTaskRequestPayloadDto) {
    const task = await this.taskModel.findById(replaceTaskDto.taskId);
    const desk = await this.deskModel.findById(task.desk);

    task.column = replaceTaskDto.toId as any;

    desk.columns = desk.columns.map((column) => {
      if (column._id === replaceTaskDto.fromId) {
        column.tasks = column.tasks.filter(
          (task) => task.toString() !== replaceTaskDto.taskId,
        );
      }

      if (column._id === replaceTaskDto.toId) {
        column.tasks.push(replaceTaskDto.taskId as any);
      }

      return column;
    });

    await Promise.all([task.save(), desk.save()]);

    return 'success';
  }
}
