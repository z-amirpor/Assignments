import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITaskRequest } from './typings/task-request.models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
addTask(task:ITaskRequest):Observable<any>{
return this.http.post('http://localhost:3000/api/task/add',task)
}
getTask():Observable<any>{
  return this.http.get('http://localhost:3000/api/task/get')
  }
  getTask(id:number):Observable<any>{
    return this.http.get(`http://localhost:3000/api/task/get/${id}`)
    }
    chengeStatus(id:number):Observable<any>{
      return this.http.get(`http://localhost:3000/api/task/status/${id}`)
      }
      editTitle(datd:ITaskRequest,id:number):Observable<any>{
        return this.http.put(`http://localhost:3000/api/task/edit/${id}`,data)
        }
    deleteTask(id:number):Observable<any>{
      return this.http.delete(`http://localhost:3000/api/task/delete/${id}`)
      }
}
