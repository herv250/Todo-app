import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() public todo: Todo

  constructor() {
    //this.title = "Webapps taak";
   }

  ngOnInit() {
  }

  get title(){
    return this.todo.title;
  }

  get isDone(){
  return this.todo.isDone;
  }

}