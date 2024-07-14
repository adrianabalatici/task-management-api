import { Injectable } from "@nestjs/common";
import { Task } from "./entities/task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: uuidv4(),
      ...createTaskDto,
      status: 'pending'
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    if (task) {
      const updatedTask = { ...task, ...updateTaskDto };
      this.tasks = this.tasks.map(t => (t.id === id ? updatedTask : t));
      return updatedTask;
    }
    return null;
  }

  remove(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
