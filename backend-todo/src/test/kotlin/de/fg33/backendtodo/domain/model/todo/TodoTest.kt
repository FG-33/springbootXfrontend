package de.fg33.backendtodo.domain.model.todo

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import java.lang.Thread.sleep
import java.util.*

internal class TodoTest {

    @Test
    fun `create todo`() {
        // GIVEN
        val text = "Description of a todo"

        // WHEN
        val todo = Todo(UUID.randomUUID().toString(), text)

        // THEN
        assertThat(todo.id).isNotBlank()
        assertThat(todo.id).isNotEmpty()
        assertThat(todo.text).isEqualTo(text)
        assertThat(todo.isDone).isFalse()
        assertThat(todo.creationDate).isEqualTo(todo.modifiedDate)
    }

    @Test
    fun `change isDone of todo`() {
        // GIVEN
        val todo = Todo(UUID.randomUUID().toString(), "description")
        assertThat(todo.creationDate).isEqualTo(todo.modifiedDate)

        // WHEN
        sleep(50)
        todo.isDone = true

        // THEN
        assertThat(todo.isDone).isTrue()
        assertThat(todo.modifiedDate).isAfter(todo.creationDate)
    }

    @Test
    fun `change text of todo`() {
        // GIVEN
        val todo = Todo(UUID.randomUUID().toString(), "description")
        assertThat(todo.creationDate).isEqualTo(todo.modifiedDate)

        // WHEN
        sleep(50)
        val newDescription = "a new desciption"
        todo.text = newDescription

        // THEN
        assertThat(todo.text).isEqualTo(newDescription)
        assertThat(todo.modifiedDate).isAfter(todo.creationDate)
    }
}