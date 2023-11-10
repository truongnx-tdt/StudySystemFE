import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewUsRoutingModule } from './review-us-routing.module';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    ReviewUsRoutingModule
  ]
})
export class ReviewUsModule { }
