export class Todo {
    private _title: string;
    private _done: boolean;

    constructor(title: string, done: boolean = false){
        this._title = title;
        this._done = done;
    }

    get title() : string {
        return this._title;
    }

    get isDone() : boolean {
        return this._done;
    }

    done(){
        this._done = true;
    }

    toggleIsDone(){
        this._done = !this._done;
    }
}
