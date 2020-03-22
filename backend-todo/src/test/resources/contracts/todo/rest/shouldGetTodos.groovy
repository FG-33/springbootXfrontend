package contracts.frontend.todo

import org.springframework.cloud.contract.spec.Contract

Contract.make {

    description("should return todo")

    request {
        method POST()
        url "/todo"
        body(
            text: "text of the new todo",
        )
        headers {
            contentType(applicationJson())
        }
    }

    response {
        status 200
        body(
            "text": "text of the new todo",
            "id": "123"
        )
        headers {
            contentType(applicationJson())
        }
    }
}