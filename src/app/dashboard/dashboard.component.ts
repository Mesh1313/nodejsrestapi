import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public tasksCollection:Array<Task> = [];

	constructor(private taskService:TaskService) { }

	ngOnInit() {
		this.taskService.getTasks().subscribe((tasks) => {
			for(let task of tasks) {
				let parsedDate = new Date(task.timeStamp);
				task.date = `${(parsedDate.getMonth() + 1)}/${parsedDate.getDate()}/${parsedDate.getFullYear()}`;
				this.tasksCollection.push(task);
			}
		});
	}

}
