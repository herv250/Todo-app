import { Pipe, PipeTransform } from '@angular/core';
import { Todolist } from "./todo-list.model";

@Pipe({
  name: 'todoSort'
})
export class TodoSortPipe implements PipeTransform {
  transform(todolists: Array<Todolist>): Array<Todolist> {
    if (!todolists || todolists === undefined || todolists.length === 0) {
      return null;
    }
    todolists.sort((list1: Todolist, list2: Todolist) => {
      console.log('sort');
      if (list1.lastChangeDate > list2.lastChangeDate) {
        return -1;
      } else if (list1.lastChangeDate < list2.lastChangeDate) {
        return 1;
      } else {
        return 0;
      }
    });
    return todolists;
  }
}
