import { Component, OnInit } from '@angular/core';
import { Tasks } from '../models/Alist';
import { AlistService } from '../alist.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Tasks

  constructor(private alistService: AlistService) { }

  ngOnInit() {
    this.updateTaskList();
  }

  updateTaskList(){
    this.taskList = this.alistService.alist();
  }  
  
}
