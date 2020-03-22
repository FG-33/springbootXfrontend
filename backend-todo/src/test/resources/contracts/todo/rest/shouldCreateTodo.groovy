import org.springframework.cloud.contract.spec.Contract

Contract.make {

    description("should return todo")

    request {
        method POST()
        urlPath("/todo") {
            queryParameters {
                parameter text: "text of the new todo"
            }
        }
        headers {
            contentType(applicationJson())
        }
    }

    response {
        status 200
        body(
            "text": "text of the new todo",
            "id": "12345"
        )
        headers {
            contentType(applicationJson())
        }
    }
}