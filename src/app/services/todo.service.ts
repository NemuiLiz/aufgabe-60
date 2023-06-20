import { Injectable } from '@angular/core';
import {ToDo} from "../models/todo";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private httpClient: HttpClient) { }



  addToDoService(toDo: ToDo) {
    return this.httpClient.post<ToDo>('http://localhost:8080/todo', toDo, {headers: this.getHeaders()});
  }

  getAllToDoService(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>('http://localhost:8080/todo', {headers: this.getHeaders()});
  }

  getHeaders(){
    let username = 'admin';
    let password = 'adminPassword';
    let auth = btoa(`${username}:${password}`);

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + auth
    });
  }

  deleteToDoService(toDo: ToDo) {
    return this.httpClient.delete('http://localhost:8080/todo/' + toDo.id, {headers: this.getHeaders()});
  }


}
