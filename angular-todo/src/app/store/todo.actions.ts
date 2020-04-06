/**
 * The actions for the todo state.
 */
export namespace TodoActions {
    export class Create {
        static readonly type = '[Todo] Create';
        constructor(public textOfTodo: string) {}
    }

    export class Delete {
        static readonly type = '[Todo] Delete';
        constructor(public id: string) {}
    }

    export class Get {
        static readonly type = '[Todo] Get';
        constructor(public id: string) {}
    }

    export class GetAll {
        static readonly type = '[Todo] GetAll';
    }

    export class ChangeText {
        static readonly type = '[Todo] ChangeText';
        constructor(public id: string, public newText: string) {}
    }

    export class ChangeStatus {
        static readonly type = '[Todo] ChangeStatus';
        constructor(public id: string, public newStatus: boolean) {}
    }
}