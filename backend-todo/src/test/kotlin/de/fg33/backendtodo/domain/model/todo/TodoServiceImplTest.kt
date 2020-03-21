package de.fg33.backendtodo.domain.model.todo

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.util.*

@SpringBootTest
internal class TodoServiceImplTest(
        @Autowired private val todoRepository: TodoRepository,
        @Autowired private val todoService: TodoService
) {

    @BeforeEach
    fun resetRepository() {
        todoRepository.deleteAll()
    }

    @Test
    fun `create todo`() {
        // GIVEN
        val text = "a text - afaeiofjsaies"

        // WHEN
        val todo = todoService.createTodo(text)

        // THEN
        val todosInRepo: List<Todo> = todoRepository.findAll()
        assertThat(todosInRepo.size).isEqualTo(1)
        assertThat(todosInRepo[0].id).isEqualTo(todo.id)
        assertThat(todosInRepo[0].text).isEqualTo(todo.text)
    }

    @Test
    fun `delete todo`() {
        // GIVEN
        val text = "a text - afaeiofjsaies"
        val todo1 = Todo(UUID.randomUUID().toString(), text + "fw8ef9")
        val todo2 = Todo(UUID.randomUUID().toString(), text + "fowef123")
        todoRepository.saveAll(listOf(todo1, todo2))

        // WHEN
        todoService.deleteTodo(todo2.id)

        // THEN
        val todosInRepo: List<Todo> = todoRepository.findAll()
        assertThat(todosInRepo.size).isEqualTo(1)
        assertThat(todosInRepo[0]).isEqualToComparingFieldByField(todo1)
    }

    @Test
    fun `get todo`() {
        // GIVEN
        val text = "a text - afaeiofjsaies"
        val todo1 = Todo(UUID.randomUUID().toString(), text + "fw8ef9")
        val todo2 = Todo(UUID.randomUUID().toString(), text + "fowef123")
        val todo3 = Todo(UUID.randomUUID().toString(), text + "fowe24234f123")
        todoRepository.saveAll(listOf(todo1, todo2, todo3))

        // WHEN
        val todoFromRepo = todoService.getTodo(todo2.id)

        // THEN
        assertThat(todoFromRepo).isEqualToComparingFieldByField(todo2)
    }

    @Test
    fun `get todos`() {
        // GIVEN
        val text = "a text - afaeiofjsaies"
        val todo1 = Todo(UUID.randomUUID().toString(), text + "fw8ef9")
        val todo2 = Todo(UUID.randomUUID().toString(), text + "fowef123")
        val todo3 = Todo(UUID.randomUUID().toString(), text + "fowe24234f123")
        todoRepository.saveAll(listOf(todo1, todo2, todo3))

        // WHEN
        val todosInRepo = todoService.getTodos()

        // THEN
        assertThat(todosInRepo).usingFieldByFieldElementComparator().containsExactlyInAnyOrderElementsOf(listOf(todo1, todo2, todo3))
    }

    @Test
    fun `change isDone of todo`() {
        // GIVEN
        val todo1 = Todo(UUID.randomUUID().toString(), "fw8ef9")
        val todo2 = Todo(UUID.randomUUID().toString(), "fowef123")
        todoRepository.saveAll(listOf(todo1, todo2))

        // WHEN
        todoService.changeIsDone(todo1.id, true)

        // THEN
        val todoFromRepo = todoRepository.findById(todo1.id).get()
        assertThat(todoFromRepo.isDone).isTrue()
    }

    @Test
    fun `change text of todo`() {
        // GIVEN
        val todo1 = Todo(UUID.randomUUID().toString(), "fw8ef9")
        val todo2 = Todo(UUID.randomUUID().toString(), "fowef123")
        todoRepository.saveAll(listOf(todo1, todo2))

        // WHEN
        val newText = "owf9wjefjwe0fw9efjw09efjw0ef"
        todoService.changeText(todo2.id, newText)

        // THEN
        val todoFromRepo = todoRepository.findById(todo2.id).get()
        assertThat(todoFromRepo.text).isEqualTo(newText)
    }
}