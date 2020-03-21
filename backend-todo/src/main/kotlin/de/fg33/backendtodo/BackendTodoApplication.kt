package de.fg33.backendtodo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class BackendTodoApplication

fun main(args: Array<String>) {
	runApplication<BackendTodoApplication>(*args)
}
