package de.fg33.backendtodo.domain.model.todo

import de.fg33.backendtodo.domain.model.todo.exception.TodoNotFoundException
import org.springframework.stereotype.Service
import java.util.*

@Service
class TodoServiceImpl(private val todoRepository: TodoRepository) : TodoService {
    override fun createTodo(text: String): Todo {
        return todoRepository.save(Todo(UUID.randomUUID().toString(), text))
    }

    override fun deleteTodo(id: String) {
        todoRepository.deleteById(id)
    }

    override fun getTodo(id: String): Todo {
        return todoRepository.findById(id).orElseThrow { throw TodoNotFoundException("Cannot get Todo. Todo not found.") }
    }

    override fun getTodos(): List<Todo> {
        return todoRepository.findAll()
    }

    override fun changeIsDone(id: String, status: Boolean) {
        val todo: Todo = todoRepository.findById(id).orElseThrow { throw TodoNotFoundException("Cannot change status. Todo not found.") }
        todo.isDone = status
        todoRepository.save(todo)
    }

    override fun changeText(id: String, text: String) {
        val todo: Todo = todoRepository.findById(id).orElseThrow { throw TodoNotFoundException("Cannot change text. Todo not found.") }
        todo.text = text
        todoRepository.save(todo)
    }
}