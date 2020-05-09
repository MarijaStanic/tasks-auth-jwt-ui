import { Component, OnInit } from '@angular/core';
import { TodoDataService, Todo } from 'src/app/service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoService.retrieveTodo('tamara', this.id).subscribe((response) => {
      this.todo = response;
    });
  }

  save() {
    this.todoService
      .updateTodo('tamara', this.id, this.todo)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['todos']);
      });
  }
}
