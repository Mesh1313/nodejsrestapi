import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(private http:Http) { }

  getTasks() {
  	return this.http.get('/api/v1/tasks')
  		.map(data => data.json());
  }

  createTask(task:Task) {}
}
