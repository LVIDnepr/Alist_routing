import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Alist';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent{
  @Input() task: Task
  @Output() save = new EventEmitter<Task>()
  @Output() cancel = new EventEmitter<void>()

  statusTask = [
    { id: 0, name: "Working" },
    { id: 1, name: "Done" }
  ];

  constructor() { }

  onFormSubmit(){
    this.save.emit(this.task);
  }

  onCancelBtnClick(){
    this.cancel.emit();
  }
}
