import Vue from 'vue'
import Vuex from 'vuex'
import TodoAPI from "../api/todo-api"
import notify from '../notification/notify';

Vue.use(notify)
Vue.use(Vuex)

const $notify = new Vue().$notify


// store which holds the todos
const store = new Vuex.Store({
    
    state: {
      todos: []
    },

    mutations: {
      // set todos property
      set (state, todos) {
        state.todos = todos
      },
      // push new todo into todos array
      push (state, todo) {
        state.todos.push(todo)
      },
      // remove todo via id
      remove (state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id)
      },
      // change status of todo to payload.newStatus specified by payload.id
      changeStatusOfTodo (state, payload) {
          const idx = state.todos.findIndex(todo => todo.id === payload.id)
          state.todos[idx].isDone = payload.newStatus
      },
      // change text of todo to payload.newText specified by payload.id
      changeTextOfTodo (state, payload) {
        const idx = state.todos.findIndex(todo => todo.id === payload.id)
        state.todos[idx].text = payload.newText
      }
    },

    actions: {
      getTodos ({ commit }) {
        TodoAPI.getTodos()
        .then(response => {
            commit("set", response.data)
        })
        .catch(error => {
          $notify.error("Could not get todos: " + error.message)
        })
      },

      createTodo ({ commit }, newText) {
        TodoAPI.createTodo(newText)
        .then(response => {
          commit("push", response.data)
        })
        .catch(error => {
          $notify.error("Could not create todo: " + error.message)
        })
      },

      deleteTodo({ commit }, id) {
        TodoAPI.deleteTodo(id)
        .then(() => {
          commit("remove", id)
        })
        .catch(error => {
          $notify.error("Could not delete todo: " + error.message)
        })
      },

      changeStatusOfTodo({ commit }, payload) {
        TodoAPI.changeStatusOfTodo(payload.id, payload.newStatus)
        .then(() => {
          commit("changeStatusOfTodo", payload)
        })
        .catch(error => {
          $notify.error("Could not change status of todo: " + error.message)
        })
      },

      changeTextOfTodo({ commit }, payload) {
        TodoAPI.changeTextOfTodo(payload.id, payload.newText)
        .then(() => {
          commit("changeTextOfTodo", payload)
        })
        .catch(error => {
          $notify.error("Could not text of todo: " + error.message)
        })
      }
    }
  })

  export default store