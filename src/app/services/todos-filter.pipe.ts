import { ITodo } from './todo.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTodos',
})
export class TodosFilter implements PipeTransform {
  transform(todos: ITodo[], search: string): ITodo[] {
    return this.searchTodos(todos, search);
  }
  searchTodos(todos, search) {
    if (!search.trim()) {
      return todos;
    }
    return todos.filter((todo) => {
      return (
        todo.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !==
        -1
      );
    });
  }
}
