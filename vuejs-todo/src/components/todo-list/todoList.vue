<template>	
	<div class="todo-list-container">
	
    <!-- new todo input -->
		<div class="todo-input">
			<input type="text" placeholder="Describe Todo.." v-model="newTodoText" v-on:keyup.enter="createTodo()"/>
			<a class="action" v-on:click="createTodo()"> +</a>
		</div>
		
    <!-- todo list -->
    <span v-for="todo in todos" v-bind:key="todo.id">
      <todoEntry v-bind:todo=todo></todoEntry>                
    </span>
  </div>
</template>

<script>

import {mapState} from "vuex"
import todoEntry from "./todo-entry/todoEntry"

// a list containing todos and an input to create new ones
export default {
  // injected store can be used via this.$store
  data: function() {
    return {
      newTodoText: "",
    }
  },

  created: function() {
    this.$store.dispatch("getTodos")
  },

  components: {
    "todoEntry": todoEntry
  },

  name: "todoList",
  
  computed: mapState([
      "todos"
  ]),

  methods: {
    createTodo() {
      if (this.newTodoText === "") {
        this.$notify.info("Please enter a description before adding a todo.")
        return;
      }

      this.$store.dispatch("createTodo", this.newTodoText).then(() => {
        this.newTodoText = ""
      })
    },
  }
}
</script>