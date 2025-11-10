import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBlock, ISlide } from '../../models/slide.model';

@Component({
  selector: 'app-slide-main-component',
  imports: [ CommonModule ],
  templateUrl: './slide-main.component.html',
  styleUrl: './slide-main.component.css',
})
export class SlideMainComponent {
  @Input({ required: true}) blocks!: ContentBlock[]; 
}
