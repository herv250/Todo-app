import { Todo } from "./todo.model";

export class TodoList {
    private _title: string;
    private _todos = new Array<Todo>();
    private _dateLastChange: Date;

    constructor(title: string){
        this._title = title;
        this._dateLastChange = new Date();
    }

    addTodo(todo: Todo){
        this._todos.push(todo);        
        this.updateLastChangeDate();
    }

    get title() : string {
        return this._title;
    }

    get dateLastChange() : Date {
        return this._dateLastChange;
    }

    get todos() : Array<Todo>{
        return this._todos;
    }

    private updateLastChangeDate() {
        this._dateLastChange = new Date();
    }
}
