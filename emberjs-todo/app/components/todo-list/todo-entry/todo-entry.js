import Component from '@glimmer/component';
import {action, set} from "@ember/object";
import {tracked} from "@glimmer/tracking";
import {inject as service} from '@ember/service';

/**
 * Todo entry component which contains the done status and the text of the todo.
 * Encapsulates deletion of todo, change status of todo and change text of todo.
 */
export default class TodoListTodoEntryTodoEntryComponent extends Component {
    @tracked newText = "";
    @tracked editing = false;
    @service todoStore;

    @action
    changeStatusOfTodo() {
        this.todoStore.changeStatusOfTodo(this.args.todo.id, !this.args.todo.isDone);
    }

    @action
    changeTextOfTodo() {
        this.todoStore.changeTextOfTodo(this.args.todo.id, this.newText);
        this.toggleEdit();
    }

    @action
    deleteTodo() {
        this.todoStore.deleteTodo(this.args.todo.id);
    }

    @action
    toggleEdit() {
        this.editing = !this.editing;
        if (this.editing) {
            this.newText = this.args.todo.text;
            Ember.run.scheduleOnce('afterRender', this, function() {
                document.getElementById(this.args.todo.id).focus();
            });
        }
    }
}
