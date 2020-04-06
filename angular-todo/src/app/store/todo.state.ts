import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { TodoActions } from "./todo.actions";
import { Todo } from "../model/todo.model";
import { TodoApiService } from '../services/todo-api/todo-api.service';
import { ToastrMessageService } from '../services/toastr/toastr.service';

/**
 * The todo state for central management of the todo objects.
 */

export interface TodoStateModel {
  todos: Todo[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: []
  }
})
@Injectable()
export class TodoState {
  constructor(private todoApiService: TodoApiService,
              private toastrService: ToastrMessageService) {}

  @Action(TodoActions.Create)
  create(ctx: StateContext<TodoStateModel>, action: TodoActions.Create) {
    return this.todoApiService.createTodo(action.textOfTodo).toPromise()
    .then(todo => {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            todos: [...state.todos, todo]
        })
    }, error => {
      this.toastrService.error("Could not create todo: " + error.message);       
    });
  }

  @Action(TodoActions.Delete)
  delete(ctx: StateContext<TodoStateModel>, action: TodoActions.Delete) {
    return this.todoApiService.deleteTodo(action.id).toPromise()
    .then(() => {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            todos: [...state.todos.filter(todo => todo.id !== action.id)]
        })
    }, error => {
      this.toastrService.error("Could not delete todo: " + error.message);
    });
  }

  @Action(TodoActions.GetAll)
  getAll(ctx: StateContext<TodoStateModel>, action: TodoActions.GetAll) {
    return this.todoApiService.getTodos().toPromise()
    .then(todos => {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            todos: [...todos]
        })
    }, error => {
      this.toastrService.error("Could not get todos: " + error.message);
    });
  }

  @Action(TodoActions.ChangeStatus)
  changeStatus(ctx: StateContext<TodoStateModel>, action: TodoActions.ChangeStatus) {
    return this.todoApiService.changeStatusOfTodo(action.id, action.newStatus).toPromise()
    .then(() => {
        const state = ctx.getState();
        const todos = state.todos;
        const idx = todos.findIndex(todo => todo.id === action.id);
        todos[idx].isDone = action.newStatus;
        ctx.setState({
            ...state,
            todos: [...todos]
        })
    }, error => {
      this.toastrService.error("Could not change status of todo: " + error.message);
    });
  }

  @Action(TodoActions.ChangeText)
  changeText(ctx: StateContext<TodoStateModel>, action: TodoActions.ChangeText) {
    return this.todoApiService.changeTextOfTodo(action.id, action.newText).toPromise()
    .then(() => {
        const state = ctx.getState();
        const todos = state.todos;
        const idx = todos.findIndex(todo => todo.id === action.id);
        todos[idx].text = action.newText;
        ctx.setState({
            ...state,
            todos: [...todos]
        })
    }, error => {
      this.toastrService.error("Could not change text of todo: " + error.message);
    });
  }
}