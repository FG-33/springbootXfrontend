import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
import {connect} from 'ember-redux';
import {inject as service} from "@ember/service";
import {allTodos} from '../../reducers/todo';

// loads todos from store
// todos is automatically updated when store changes
const stateToComputed = state => ({
    todos: allTodos(state)
});

/**
 * Todo list component. Contains a list of todos as well as an input element which can be used 
 * to create new todos.
 */
class TodoListComponent extends Component {
    @service todoStore;
    @tracked newTodoText = "";

    @action
    createTodo() {
        if (!this.newTodoText) {
            return;
        }
        this.todoStore.createTodo(this.newTodoText);
        this.newTodoText = "";
    }
}

export default connect(stateToComputed)(TodoListComponent);