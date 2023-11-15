import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';
import { ProductByIdComponent } from './product-by-id/product-by-id.component';


@NgModule({
  declarations: [
    ProductByIdComponent
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
