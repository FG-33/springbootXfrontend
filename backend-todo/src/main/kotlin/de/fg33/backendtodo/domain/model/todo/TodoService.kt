package de.fg33.backendtodo.domain.model.todo

interface TodoService {
    fun createTodo(text: String): Todo
    fun deleteTodo(id: String)
    fun getTodo(id: String): Todo
    fun getTodos(): List<Todo>
    fun changeIsDone(id: String, status: Boolean)
    fun changeText(id: String, text: String)
}