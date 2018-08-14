import { Todo } from "./todo.model";

export class TodoList {
    private _title: string;
    private _done: boolean;
    private _todos = new Array<Todo>();
    private _dateAdded: Date = new Date();

    constructor(title: string){
        this._title = title;
    }

    addTodo(todo: Todo){
        this._todos.push(todo);
    }

    get title() : string {
        return this._title;
    }

    get isDone() : boolean {
        return this._done;
    }

    get dateAdded() : Date {
        return this._dateAdded;
    }

    get todos(){
        return this._todos;
    }
}
