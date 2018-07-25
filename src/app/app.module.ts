import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskListComponent } from './alist/task-list/task-list.component';
import { AlistComponent } from './alist/alist/alist.component';
import { AddTaskComponent } from './alist/add-task/add-task.component';
import { EditTaskComponent } from './alist/edit-task/edit-task.component';
import { AlistModule } from './alist/alist.module';

const routes:Routes = [
  {path:'', redirectTo: '/alist', pathMatch: 'full'},  

  {path: 'alist', component: AlistComponent, children: [
    {path:'', component: TaskListComponent},
    {path:'add', component: AddTaskComponent},
    {path:':id', component: EditTaskComponent}
  ]},

  {path:'**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
