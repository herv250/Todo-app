import { Pipe, PipeTransform } from '@angular/core';
import { Todolist } from "./todo-list.model";

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform{

  transform(todoLists: Todolist[], title: string): Todolist[] {
    if(!title || title.length === 0){
      return todoLists;
    }

    return todoLists.filter(todo =>
      todo.title.toLowerCase().includes(title.toLowerCase()));
  }
}
