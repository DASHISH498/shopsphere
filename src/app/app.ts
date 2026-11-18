import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { Dashboard } from './features/dashboard/dashboard';
import { Header } from './layout/header/header';

@Component({
  imports: [Sidebar, Header, Dashboard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('shopsphere');
}
