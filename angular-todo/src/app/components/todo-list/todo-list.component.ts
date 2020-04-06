import { Component, OnInit } from '@angular/core';
import { Todo } from "../../model/todo.model";
import { Store, Select } from '@ngxs/store';
import { TodoState } from 'src/app/store/todo.state';
import { Observable } from 'rxjs';
import { TodoActions } from 'src/app/store/todo.actions';
import { ToastrMessageService } from 'src/app/services/toastr/toastr.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  newTodoText = "";
  todos: Todo[] = [];
  @Select(state => state.todo.todos) todos$: Observable<Todo[]>;

  constructor(private store: Store,
              private toastrService: ToastrMessageService) { 
    this.todos$.subscribe(todos => {
      this.todos = [...todos];
    });
    this.store.dispatch(new TodoActions.GetAll());
  }

  createTodo(): void {
    if (!this.newTodoText) {
      this.toastrService.error("Enter a description before creating a todo.");
      return;
    }
    this.store.dispatch(new TodoActions.Create(this.newTodoText)).toPromise().then(() => {
      this.newTodoText = '';
    })
  }

}
