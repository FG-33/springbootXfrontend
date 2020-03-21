package de.fg33.backendtodo.api.todo

import de.fg33.backendtodo.domain.model.todo.Todo
import de.fg33.backendtodo.domain.model.todo.TodoService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/todo")
class TodoController(private val todoService: TodoService) {

    @PostMapping
    fun createTodo(@RequestParam text: String): Todo = todoService.createTodo(text)

    @DeleteMapping("/{id}")
    fun deleteTodo(@PathVariable id: String) = todoService.deleteTodo(id)

    @GetMapping("/{id}")
    fun getTodo(@PathVariable id: String): Todo = todoService.getTodo(id)

    @GetMapping
    fun getTodos(): List<Todo> = todoService.getTodos()

    @PatchMapping("/{id}/status")
    fun changeIsDone(@PathVariable id: String,
                     @RequestParam status: Boolean) = todoService.changeIsDone(id, status)

    @PatchMapping("/{id}/text")
    fun changeText(@PathVariable id: String,
                   @RequestParam text: String) = todoService.changeText(id, text)
}