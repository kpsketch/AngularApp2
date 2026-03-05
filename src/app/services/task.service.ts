import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = new BehaviorSubject<any[]>([]);
  tasks$ = this.tasks.asObservable();

  addTask(task: any) {
    const current = this.tasks.value;
    this.tasks.next([...current, task]);
  }

  completeTask(index: number) {
    const updated = this.tasks.value;
    updated[index].completed = true;
    this.tasks.next([...updated]);
  }
}