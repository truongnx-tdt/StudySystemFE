import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SlideSupplierComponent } from './slide-supplier/slide-supplier.component';
import { MaterialModule } from '../material.module';
import { CarouselProductComponent } from './carousel-product/carousel-product.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';


@NgModule({
  declarations: [
    SlideSupplierComponent,
    CarouselProductComponent,
    BannerSliderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CarouselModule,
    MaterialModule
  ],
  exports: [
    SlideSupplierComponent,
    CarouselProductComponent,
    BannerSliderComponent
  ]
})
export class SharedModule { }
