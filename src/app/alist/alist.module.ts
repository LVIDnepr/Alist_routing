import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';

import { AlistComponent } from './alist/alist.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NavigastionComponent } from './navigastion/navigastion.component';
import { AlistService } from './alist.service';
import { FormTaskComponent } from './form-task/form-task.component';

const routes: Routes = [
  {path: '', redirectTo: 'alist', pathMatch: 'full'},  
  {path:'add', component: AddTaskComponent},
  {path: 'alist', component: AlistComponent},
  {path:':id', component: EditTaskComponent}
]

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  providers: [AlistService],
  declarations: [TaskListComponent, EditTaskComponent, AddTaskComponent, AlistComponent, NavigastionComponent, FormTaskComponent]
})
export class AlistModule { }
