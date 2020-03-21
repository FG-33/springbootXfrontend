package de.fg33.backendtodo.domain.model.todo

import org.springframework.data.mongodb.repository.MongoRepository

interface TodoRepository : MongoRepository<Todo, String>