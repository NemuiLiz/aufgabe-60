import {Component, Input} from '@angular/core';
import {ToDo} from "../models/todo";
import { ToDoService } from "../services/todo.service" ;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    @Input() toDo!: ToDo;

  deleteToDo() {
    this.toDoService.deleteToDoService(this.toDo).subscribe();
  }

  constructor(private toDoService: ToDoService ) {}
}
