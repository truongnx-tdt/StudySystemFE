import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumdComponent } from './breadcrumd/breadcrumd.component';
import { BreadcrumbModule } from 'xng-breadcrumb';


@NgModule({
  declarations: [
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumdComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    BreadcrumbModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumdComponent
  ]
})
export class CoreModule { }
