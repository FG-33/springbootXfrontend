import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HelpComponent } from './components/help/help.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'help', component: HelpComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
