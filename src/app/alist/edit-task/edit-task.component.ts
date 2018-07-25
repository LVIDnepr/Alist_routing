import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Alist';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent extends AddTaskComponent implements OnInit {
  task: Task = new Task;  

  ngOnInit() {
    this.getTask();
  }

  getTask(){
    const id = +this.route.snapshot.params.id;

    this.task = this.alistService.get(id);
  }
}
