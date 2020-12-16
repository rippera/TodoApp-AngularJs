import { ITodo, TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string = '';
  show: boolean = false;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
  submitHandler() {
    if (this.title == '') {
      // alert('fill title input');
      this.show = true;
      return;
    } else {
      this.show = false;
    }
    const todo: ITodo = {
      id: Date.now(),
      title: this.title,
      completed: false,
      date: new Date(),
    };

    this.todoService.addTodo(todo);
    this.title = '';
  }
}
