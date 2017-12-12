import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public tasks:Array<Task> = [];

	constructor(private taskService:TaskService) { }

	ngOnInit() {
		this.taskService.getTasks().subscribe((tasks) => {
			console.log(tasks);
		});
	}

}
