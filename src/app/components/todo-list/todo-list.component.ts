import {Component, OnInit} from '@angular/core';
import {ToDo} from "../../models/todo";
import {ToDoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  list: ToDo[] = [];


  constructor(private toDoService: ToDoService) {
  }

  ngOnInit(): void {
    this.toDoService.getAllToDoService().subscribe((toDoList) => { this.list = toDoList});
  }

}
