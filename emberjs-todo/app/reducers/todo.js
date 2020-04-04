import * as types from '../actions/types';
import {set} from "@ember/object";

const initialState = {
  todos: []
};

/**
 * Todo store reducer. Takes actions and applies a specific change to the store.
 */
export default function todos(state, action) {
  switch (action.type) {
    case types.GET_TODOS: {
      let todos = action.todos;
      return Object.assign({}, state, { todos: todos });
    }

    case types.DELETE_TODO: {
      let todos = state.todos.filter(todo => todo.id != action.id)
      return Object.assign({}, state, { todos: todos });
    }

    case types.EDIT_STATUS_TODO: {
      let idx = state.todos.findIndex(todo => todo.id === action.id);
      let todos = state.todos;
      set(todos[idx], "status", action.newStatus);
      return Object.assign({}, state, { todos: todos });
    }

    case types.EDIT_TEXT_TODO: {
      let idx = state.todos.findIndex(todo => todo.id === action.id);
      let todos = state.todos;
      set(todos[idx], "text", action.newText);
      return Object.assign({}, state, { todos: todos });
    }

    case types.CREATE_TODO: {
      let todos = [...state.todos, action.todo];
      return Object.assign({}, state, { todos: todos });
    }

    default: {
      return state || initialState;
    }
  }
}

export const allTodos = state => state.todos.todos;