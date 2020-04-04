import Service from '@ember/service';
import {connect} from 'ember-redux';
import dispatchToActions from "../actions/todo";


/**
 * An emberjs service which can be used to dispatch todo store actions.
 * The service can be injected in other services/components.
 */
class TodoStoreService extends Service {

    getTodos() {
        this.actions.getTodos();
    }

    createTodo(textOfTodo) {
        this.actions.createTodo(textOfTodo);
    }

    deleteTodo(id) {
        this.actions.deleteTodo(id);
    }

    changeStatusOfTodo(id, newStatus) {
        this.actions.changeStatusOfTodo(id, newStatus);
    }

    changeTextOfTodo(id, newText) {
        this.actions.changeTextOfTodo(id, newText);
    }
}

export default connect(null, dispatchToActions)(TodoStoreService);
