import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../services/task.service';
import { FormatTaskPipe } from '../pipes/format-task.pipe';
import { HighlightTaskDirective } from '../directives/highlight-task.directive';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, FormatTaskPipe, HighlightTaskDirective],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  newTask = '';

  constructor(public taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }

  toggleFav(id: number) {
    this.taskService.toggleFavorite(id);
  }

  remove(id: number) {
    this.taskService.deleteTask(id);
  }
}