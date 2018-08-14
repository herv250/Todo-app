export class Todo {
    private _title: string;
    private _state: boolean;

    constructor(title: string, state: boolean = false){
        this._title = title;
        this._state = state;
    }

    get title() : string {
        return this._title;
    }

    get isDone() : boolean {
        return this._state;
    }

    toggleState(){
        this._state = !this._state;
    }
}
