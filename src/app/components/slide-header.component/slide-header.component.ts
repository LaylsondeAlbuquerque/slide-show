import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ISlide } from '../../models/slide.model';

@Component({
  selector: 'app-slide-header-component',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './slide-header.component.html',
  styleUrl: './slide-header.component.css',
})
export class SlideHeaderComponent {
  @Input({ required: true }) slide!: ISlide;
}
