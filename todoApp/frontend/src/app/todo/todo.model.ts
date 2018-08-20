export class Todo {
  private _title: string;
  private _state: boolean;
  private _id: string;

  constructor(title: string, state: boolean = false) {
    this._title = title;
    this._state = state;
  }

  get title(): string {
    return this._title;
  }

  get isDone(): boolean {
    return this._state;
  }

  toggleState() {
    this._state = !this._state;
  }

  static fromJSON(json: any): Todo {
    const todo = new Todo(json.title, json.state);
    todo._id = json._id;
    return todo;
  }
}
