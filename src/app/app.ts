import { Component, signal } from '@angular/core';
import { SlideComponent } from './components/slide.component/slide.component';

@Component({
  selector: 'app-root',
  imports: [ SlideComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('slide-show');
}
