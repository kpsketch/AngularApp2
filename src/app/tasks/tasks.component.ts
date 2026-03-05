import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../services/task.service';
import { HighlightTaskDirective } from '../directives/highlight-task.directive';
import { FormatTaskPipe } from '../pipes/format-task.pipe';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightTaskDirective, FormatTaskPipe],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  newTask = '';

  constructor(public taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim() === '') return;

    this.taskService.addTask({
      name: this.newTask,
      completed: false
    });

    this.newTask = '';
  }
}