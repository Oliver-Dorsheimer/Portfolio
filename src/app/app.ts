import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MainHeader } from './layout/main-header/main-header';
import { MainPage } from './layout/main-page/main-page';
import { MainFooter } from './layout/main-footer/main-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MainHeader, MainPage, MainFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
