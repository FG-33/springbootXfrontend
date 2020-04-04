import axios from "axios"

// provides methods for the todo backend api

// url of the backend
const TODO_API_URL = "http://localhost:8080/todo"

// methods
function getTodo(id) { 
  return axios.get(TODO_API_URL + "/" + id)
}

function getTodos() {
  return axios.get(TODO_API_URL)
}

function createTodo(textOfTodo) {
  return axios.post(TODO_API_URL, null, {
    params: {
      text: textOfTodo
    }
  })
}

function deleteTodo(id) {
  return axios.delete(TODO_API_URL + "/" + id)
}

function changeStatusOfTodo(id, newStatus) {
  return axios.patch(TODO_API_URL + "/" + id + "/status", null, {
    params: {
      status: newStatus
    }
  })
}

function changeTextOfTodo(id, newText) {
  return axios.patch(TODO_API_URL + "/" + id + "/text", null, {
    params: {
      text: newText
    }
  })
}

export default {getTodos, getTodo, createTodo, deleteTodo, changeStatusOfTodo, changeTextOfTodo}