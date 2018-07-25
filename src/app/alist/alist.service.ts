import { Injectable } from '@angular/core';
import { Tasks, TASKS, Task } from './models/Alist';

@Injectable({
  providedIn: 'root'
})
export class AlistService {
  tasks: Tasks

  constructor() { 
    this.tasks = TASKS;
  }

  alist(): Tasks{
    return this.tasks;
  }
  
  get(id: number): Task{
    return this.tasks.find((t)=>t.id === id);
  }

  set(task: Task): Task{
    return task.id ? this.update(task) : this.add(task);
  }

  update(task: Task): Task{
    const index = this.tasks.findIndex(((t)=> t.id === task.id));

    this.tasks = [
      ...this.tasks.slice(0, index),
      task,
      ... this.tasks.slice(index + 1)
    ];

    return task;
  }

  add(task: Task): Task{
    task.id = Date.now();

    this.tasks = [...this.tasks, task]

    return task;
  }
}
