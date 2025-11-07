import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MINHA_AULA} from '../../data/aula.data';
import { ISlide } from '../../models/slide.model';

@Component({
  selector: 'app-slide-component',
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
})
export class SlideComponent {
  slides: ISlide[] = MINHA_AULA;
  
}
