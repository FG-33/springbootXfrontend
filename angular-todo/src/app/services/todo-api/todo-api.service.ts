import { Injectable } from '@angular/core';
import { Todo } from '../../model/todo.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Todo api service to get, create and modify todos.
 */
@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private TODO_API_URL = 'http://localhost:8080/todo';

  constructor(private http: HttpClient) { }

  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(this.TODO_API_URL + '/' + id);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.TODO_API_URL);
  }

  createTodo(textOfTodo: string): Observable<Todo> {
    return this.http.post<Todo>(this.TODO_API_URL, {}, {
      params: {
        text: textOfTodo
      }});
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete(this.TODO_API_URL + '/' + id);
  }

  changeTextOfTodo(id: string, newText: string): Observable<any> {
    return this.http.patch(this.TODO_API_URL + '/' + id + '/text', {}, {
      params: {
        text: newText
      }
    });
  }

  changeStatusOfTodo(id: string, newStatus: boolean): Observable<any> {
    return this.http.patch(this.TODO_API_URL + '/' + id + '/status', {}, {
      params: {
        status: newStatus.toString() 
      }
    });
  }
}
