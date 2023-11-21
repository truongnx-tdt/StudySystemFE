import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
  
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    SharedModule,
    CoreModule
  ]
})
export class ProductModule { }
