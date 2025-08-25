import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() maxStars: number = 5;    // número máximo de estrellas
  @Input() rating: number = 0;      // valor actual
   @Input() readonly: boolean = false;
  @Output() ratingChange = new EventEmitter<number>();

  hoveredStar: number = 0;

  setRating(star: number) {
    this.rating = star;
    this.ratingChange.emit(this.rating);
  }

  setHover(star: number) {
    this.hoveredStar = star;
  }

  clearHover() {
    this.hoveredStar = 0;
  }
}