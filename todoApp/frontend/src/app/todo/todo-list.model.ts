import { Todo } from "./todo.model";

export class TodoList {
    private _title: string;
    private _todos = new Array<Todo>();
    private _lastChangeDate: Date;

    constructor(title: string){
        this._title = title;
        this._lastChangeDate = new Date();
    }

    addTodo(todo: Todo){
        this._todos.push(todo);        
        this.updateLastChangeDate();
    }

    get title() : string {
        return this._title;
    }

    get lastDateChange() : Date {
        return this._lastChangeDate;
    }

    get todos() : Array<Todo>{
        return this._todos;
    }

    private updateLastChangeDate() {
        this._lastChangeDate = new Date();
    }
}
