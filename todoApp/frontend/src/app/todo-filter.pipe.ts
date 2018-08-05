import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo/todo/todo.model';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform{

  transform(todos: Todo[], title: string): Todo[] {
    if(!title || title.length === 0){
      return todos;
    }

    return todos.filter(todo =>
      todo.title.toLowerCase().includes(title.toLowerCase()));
  }
}
