package de.fg33.backendtodo.api.todo

import de.fg33.backendtodo.domain.model.todo.TodoService
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.mock.mockito.MockBean

@WebMvcTest
@EnableAutoConfiguration
internal class TodoControllerTest {

    @MockBean
    private lateinit var todoService: TodoService

    @Test
    fun `dummy test`() {
        assertThat(todoService).isNotNull
    }
}