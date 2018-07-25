import { Component } from '@angular/core';
import { Task } from '../models/Alist';
import { AlistService } from '../alist.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  task: Task = new Task;

  constructor(
    protected alistService: AlistService, 
    private router: Router,
    protected route: ActivatedRoute
  ) { }

  closeForm(){
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onFormSave(task: Task){
    this.alistService.set(task);
    this.closeForm();
  }

  onFormCancel(){
    this.closeForm();
  }

}
