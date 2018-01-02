import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public tasksCollection:Array<Task> = [];
	public taskForm: FormGroup;

	constructor(
		private taskService:TaskService,
		private fb:FormBuilder	
	) { }

	ngOnInit() {
		this.taskService.getTasks().subscribe((tasks) => {
			for(let task of tasks) {
				let parsedDate = new Date(task.timeStamp);
				task.date = `${(parsedDate.getMonth() + 1)}/${parsedDate.getDate()}/${parsedDate.getFullYear()}`;
				this.tasksCollection.unshift(task);
			}
		});

		this.taskForm = this.fb.group({
			title: ['', [Validators.required]],
			description: ['', [Validators.required]]
		});
	}

	onSubmit(taskForm) {
		let newTask:Task;
		
		if (!taskForm.valid) {
			return;
		}

		newTask = taskForm.value;

		this.taskService.addTask(newTask).subscribe((task) => {
			console.log(task);
			this.tasksCollection.unshift(task);
		});
	}
}
