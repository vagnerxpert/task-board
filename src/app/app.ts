import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('task-board');
}
