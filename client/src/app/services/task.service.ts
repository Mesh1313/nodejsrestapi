import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
	private apiPath = '/api/v1';
	private tasksEndpintPath = `${this.apiPath}/tasks`;

	constructor(private http:Http) { }

	getTasks() {
		return this.http.get(this.tasksEndpintPath)
			.map(data => data.json());
	}

	addTask(task:Task) {
		return this.http.post(this.tasksEndpintPath, task)
			.map(data => data.json());
	}
}
