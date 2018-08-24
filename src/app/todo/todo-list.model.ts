import { Todo } from './todo.model';

export class Todolist {
  private _title: string;
  private _todos = new Array<Todo>();
  private _lastChangeDate: Date;
  private _id: string;

  constructor(title: string, todos: Todo[] = [], lastChangeDate = null) {
    this._title = title;
    this._todos = todos;
    this._lastChangeDate = lastChangeDate;
  }

  get title(): string {
    return this._title;
  }

  get lastChangeDate(): Date {
    return this._lastChangeDate;
  }

  get todos(): Array<Todo> {
    return this._todos;
  }

  get id() {
    console.log('this', this._id);
    return this._id;
  }

  static fromJSON(json: any): Todolist {
    const todos = json.todos.map(todo => Todo.fromJSON(todo));
    const todolist = new Todolist(json.title, todos, json.lastChangeDate);
    todolist._id = json._id;
    console.log('convert', todolist.id);
    return todolist;
  }
}
