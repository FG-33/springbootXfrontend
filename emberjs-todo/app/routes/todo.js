import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";

/**
 * The todo route. When loading this route a getTodos action is dispatched to load
 * the todos from the backend.
 */
export default class TodoRoute extends Route {
    @service todoStore;
    
    model() {
        this.todoStore.getTodos();
    }
}
