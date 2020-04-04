import * as types from './types';
import todoApi from "../services/todo-api";

/**
 * Contains actions of the todo store.
 */
export default (dispatch) => {
    return {
        getTodos: () => todoApi.getTodos()
                                .catch(error => console.log(error))
                                .then(response => response.data)
                                .then(todos => dispatch({type: types.GET_TODOS, todos: todos})),

        createTodo: textOfTodo => todoApi.createTodo(textOfTodo)
                                          .catch(error => console.log(error))
                                          .then(response => response.data)
                                          .then(todo => dispatch({type: types.CREATE_TODO, todo: todo})),

        deleteTodo: id => todoApi.deleteTodo(id)
                                  .catch(error => console.log(error))
                                  .then(() => dispatch({type: types.DELETE_TODO, id})),

        changeStatusOfTodo: (id, newStatus) => todoApi.changeStatusOfTodo(id, newStatus)
                                                   .catch(error => console.log(error))
                                                   .then(() => dispatch({type: types.EDIT_STATUS_TODO, id, newStatus})),
        
        changeTextOfTodo: (id, newText) => todoApi.changeTextOfTodo(id, newText)
                                               .catch(error => console.log(error))
                                               .then(() => dispatch({type: types.EDIT_TEXT_TODO, id, newText}))
    }
}