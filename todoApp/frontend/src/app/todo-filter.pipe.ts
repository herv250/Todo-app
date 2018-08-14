import { Pipe, PipeTransform } from '@angular/core';
import { TodoList } from './todo/todo-list.model';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform{

  transform(todoLists: TodoList[], title: string): TodoList[] {
    if(!title || title.length === 0){
      return todoLists;
    }

    return todoLists.filter(todo =>
      todo.title.toLowerCase().includes(title.toLowerCase()));
  }
}
