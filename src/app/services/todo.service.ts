import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: ITodo[] = [];
  constructor(private http: HttpClient) {}
  fetchTodos(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=15')
      .pipe(tap((todos) => (this.todos = todos)));
  }
  onToggle(id: number) {
    const idx = this.todos.findIndex((t) => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
  addTodo(todo: ITodo) {
    this.todos.unshift(todo);
  }
}
