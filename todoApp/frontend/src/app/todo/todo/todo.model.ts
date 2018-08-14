export class Todo {
    private _title: string;
    private _done: boolean;
    private _todoItems = new Array<string>();
    private _dateAdded: Date = new Date();

    constructor(title: string){
        this._title = title;
    }

    addTodoItem(itemTitle: string){
        this._todoItems.push(itemTitle);
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

    get todoItems(){
        return this._todoItems;
    }
}
