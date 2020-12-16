import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(public todosService: TodoService) {}
  public loading: boolean = true;
  public searchString: string = '';
  public sortTodo: string = 'all';
  ngOnInit(): void {
    this.todosService
      .fetchTodos()
      .pipe(delay(500))
      .subscribe(() => (this.loading = false));
  }
  onChange(id: number) {
    this.todosService.onToggle(id);
  }
  onDelete(id: number) {
    this.todosService.removeTodo(id);
  }
}
