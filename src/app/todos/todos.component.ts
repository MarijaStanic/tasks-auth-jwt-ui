import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  message: string;
  /*= [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert in Angular', false, new Date())
  ];*/

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.retrieveAllTodos('username').subscribe((response) => {
      this.todos = response;
    });
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('tamara', id).subscribe((response) => {
      this.message = 'Deleted Successfully!';
      this.getAllTodos();
    });
  }

  updateTodo(id) {
    this.router.navigate(['todo', id]);
  }
}
