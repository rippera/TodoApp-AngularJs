import { ITodo } from './todo.service';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sortTodos',
})
export class SortTodos implements PipeTransform {
  transform(todos: ITodo[], sort: string): ITodo[] {
    if (sort === 'completed') {
      return (todos = todos.filter((item) => item.completed !== false));
    } else if (sort === 'uncompleted') {
      return (todos = todos.filter((item) => item.completed !== true));
    } else {
      return todos;
    }
  }
}
