## Todo Backend

Spring Boot backend that provides several endpoints for a todo frontend-application.

##### Versions

The backend uses the following versions:

| Framework | Version              |
|-----------|----------------------|
| Spring    | 2.3.0.BUILD-SNAPSHOT |
| Kotlin    | 1.3.70               |
| Java      | 1.8                  |

##### MongoDB

The backend uses a MongoDB database. To start a docker container that contains a running instance, use the following command:

``
$ ./docker/start-mongodb.sh``

To stop the container use:

``
$ ./docker/stop-mongodb.sh``

To remove the container use:

``
$ ./docker/remove-mongodb.sh``

##### Maven

The project uses maven. To package the project after executing tests use:

``
$ ./mvnw clean package``