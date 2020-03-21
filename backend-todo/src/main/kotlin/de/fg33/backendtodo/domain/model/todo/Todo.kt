package de.fg33.backendtodo.domain.model.todo

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document
class Todo() {

    constructor(id: String,
                text: String) : this() {
        this.id = id
        this.text = text
    }

    var id: String = ""
    private set

    var text: String = ""
    set(value) {
        field = value
        this.modifiedDate = Date()
    }

    var isDone: Boolean = false
    set(value) {
        field = value
        this.modifiedDate = Date()
    }

    var creationDate: Date = Date()
    private set

    var modifiedDate: Date = creationDate.clone() as Date


}