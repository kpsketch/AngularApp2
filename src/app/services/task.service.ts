import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export type Task = {
  id: number;
  name: string;
  isFavorite: boolean;
};

@Injectable({ providedIn: 'root' })
export class TaskService {
  private nextId = 1;

  private tasksSubject = new BehaviorSubject<Task[]>([
    { id: 1, name: 'Learn Angular', isFavorite: false },
    { id: 2, name: 'Finish Assignment 2', isFavorite: true },
    { id: 3, name: 'Push to GitHub', isFavorite: false },
    { id: 4, name: 'Send repo link to instructor', isFavorite: true }
  ]);

  // Observable list (assignment requirement)
  tasks$ = this.tasksSubject.asObservable();

  // Favorites list (derived observable)
  favorites$ = this.tasks$.pipe(
    map(list => list.filter(t => t.isFavorite))
  );

  addTask(name: string) {
    const trimmed = name.trim();
    if (!trimmed) return;

    const current = this.tasksSubject.value;
    const newTask: Task = { id: ++this.nextId, name: trimmed, isFavorite: false };
    this.tasksSubject.next([...current, newTask]);
  }

  toggleFavorite(id: number) {
    const updated = this.tasksSubject.value.map(t =>
      t.id === id ? { ...t, isFavorite: !t.isFavorite } : t
    );
    this.tasksSubject.next(updated);
  }

  deleteTask(id: number) {
    const updated = this.tasksSubject.value.filter(t => t.id !== id);
    this.tasksSubject.next(updated);
  }
}