<template>	
    <div class="todo-item">
        <!-- todo info -->
        <label>
            <input type="checkbox" v-model="todo.isDone" v-on:click="changeStatusOfTodo()" />
        </label>

        <span v-if="!editing" v-on:dblclick="toggleEdit()">{{ todo.text }}</span>
        <input v-if="editing" type="text" :ref="`${todo.id}`" v-model="newText" 
          v-on:keyup.enter="changeTextOfTodo()" 
          v-on:keyup.esc="toggleEdit()"/>

        <!-- actions -->
        <a class="action" v-on:click="deleteTodo(todo.id)"> x</a>                  
    </div>
</template>

<script>

// a single todo entry
export default {

  data: function() {
    return {
        editing: false,
        newText: this.todo.text
    }
  },

  props: ["todo"],

  name: "todoEntry",

  methods: {
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.todo.id)
    },

    changeStatusOfTodo() {
      this.$store.dispatch("changeStatusOfTodo", {
        newStatus: !this.todo.isDone,
        id: this.todo.id
      })
    },

    changeTextOfTodo() {
      this.$store.dispatch("changeTextOfTodo", {
        newText: this.newText,
        id: this.todo.id   
      }).then(() => {
        this.toggleEdit()
      })
    },
    toggleEdit() {
      this.editing = !this.editing
      if (this.editing) {
        this.$nextTick(() => this.$refs[this.todo.id].focus())
      }
    }
  }
}
</script>