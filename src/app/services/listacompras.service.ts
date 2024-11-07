import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../Lista';

@Injectable({
  providedIn: 'root'
})
export class ListacomprasService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  //preciso que seja assincrono - await
  //[] - retorando a lista
  getTasks() : Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  deleteTask(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.apiUrl}/${tarefa.id}`);
  }

  updateTask(tarefa: Tarefa) : Observable<Tarefa>{
    return this.http.put<Tarefa>(`${this.apiUrl}/${tarefa.id}`, tarefa);
  }

  addTask(tarefa: Tarefa) :  Observable<Tarefa>{
    return this.http.post<Tarefa>(`${this.apiUrl}`, tarefa)

  }
}