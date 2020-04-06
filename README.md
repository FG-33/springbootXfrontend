## SpringBoot x Frontend

The project showcases various frontend todo-applications which are implemented using different frameworks respectively. The frontend applications all use the same Spring Boot/Kotlin/MongoDB backend.

#### backend-todo

Provides several endpoints which will be used by the frontend applications:

- getTodo
- getTodos
- createTodo
- deleteTodo
- changeTextOfTodo
- changeIsDone

#### vuejs

Includes:

- Vue **Routing**
- Vue **Plugins**
- Modular architecture (multiple **components**)
- Central **state** management (vuex)
- **HTTP** requests (axios)
- Notifications/**Toasts** (vue-toastr)

#### emberjs

Includes:

- Ember **Routing**
- Modular architecture (multiple **componentes**)
- Octane
- Central **state** management (ember-redux[ember data as alternative?])
- **HTTP** requests (axios)
- No notifcations/Toasts (ember-toastr?[needs jquery and cannot be used in plain js file easily..])

#### angular2+

Includes:

- Angular **Routing**
- Modular architecture (multiple **componentes**)
- Central **state** management (ngxs)
- **HTTP** requests (angular native http client)
- Notifcations/Toasts (ngx-toastr)