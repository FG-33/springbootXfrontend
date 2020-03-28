<template>
  <div class="app">
    <a style="position: absolute;top:15px;right:15px" href="/help">Help</a>
    <h1 class="header">Things to do</h1>
    <todoList></todoList>
  </div>
</template>

<script>
import todoList from "./components/todo-list/todoList"
import store from "./store/todo-store"

// the main component of the application
export default {
  name: 'todo',
  store, // inject the store into child components
  components: {
    "todoList": todoList
  }
}
</script>
