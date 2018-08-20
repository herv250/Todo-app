import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() public todo: Todo
  state: boolean = false;
  constructor() {
    //this.title = "Webapps taak";
    
   }

  ngOnInit() {
    //this.state = this.todo.isDone;
  }

  get title(){
    return this.todo.title;
  }

}