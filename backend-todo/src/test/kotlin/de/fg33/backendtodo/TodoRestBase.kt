package de.fg33.backendtodo

import com.nhaarman.mockito_kotlin.whenever
import de.fg33.backendtodo.api.todo.TodoController
import de.fg33.backendtodo.domain.model.todo.Todo
import de.fg33.backendtodo.domain.model.todo.TodoService
import io.restassured.module.mockmvc.RestAssuredMockMvc
import org.junit.jupiter.api.BeforeEach
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean


@SpringBootTest
class TodoRestBase {

    @Autowired
    private lateinit var todoController: TodoController

    @MockBean
    private lateinit var todoService: TodoService

    @BeforeEach
    fun setup() {
        RestAssuredMockMvc.standaloneSetup(todoController)

        whenever(todoService.createTodo("text of the new todo"))
                .thenReturn(Todo("12345", "text of the new todo"))
    }
}