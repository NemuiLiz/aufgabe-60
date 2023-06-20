import { Component } from '@angular/core';
import {ToDo} from "../../models/todo";
import {ToDoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-formular',
  templateUrl: './todo-formular.component.html',
  styleUrls: ['./todo-formular.component.css']
})
export class TodoFormularComponent {
  newToDo: ToDo = {
    title: '',
    done: false,
    id: 0,
    text: '',
    dueDate: ''
  };

    addToDo(){
      this.toDoService.addToDoService(this.newToDo).subscribe();
    }

    constructor(private toDoService: ToDoService ) {}
}
