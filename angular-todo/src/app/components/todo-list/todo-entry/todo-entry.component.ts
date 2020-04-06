import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../../../model/todo.model";
import { Store } from '@ngxs/store';
import { TodoActions } from 'src/app/store/todo.actions';

@Component({
  selector: 'todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})
export class TodoEntryComponent {

  @Input("todo") todo: Todo;
  editing = false;
  newText = "";

  constructor(private store: Store) { }

  changeTextOfTodo(): void {
    this.store.dispatch(new TodoActions.ChangeText(this.todo.id, this.newText));
    this.toggleEdit();
  }

  changeStatusOfTodo(): void {
    this.store.dispatch(new TodoActions.ChangeStatus(this.todo.id, !this.todo.isDone));
  }

  deleteTodo(id: string): void {
    this.store.dispatch(new TodoActions.Delete(this.todo.id));
  }

  toggleEdit(): void {
    this.editing = !this.editing;
    if (this.editing) {
      this.newText = this.todo.text;
      setTimeout(() => document.getElementById(this.todo.id).focus(), 200);
    }
  }

}
