import { Pipe, PipeTransform } from '@angular/core';
import { TodoList } from './todo-list.model';

@Pipe({
  name: 'todoSort'
})
export class TodoSortPipe implements PipeTransform {
  transform(todolists: Array<TodoList>): Array<TodoList> {
    if (!todolists || todolists === undefined || todolists.length === 0) {
      return null;
    }
    todolists.sort((list1: TodoList, list2: TodoList) => {
      if (list1.lastDateChange > list2.lastDateChange) {
        return -1;
      } else if (list1.lastDateChange < list2.lastDateChange) {
        return 1;
      } else {
        return 0;
      }
    });
    return todolists;
  }
}
