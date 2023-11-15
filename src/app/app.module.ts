import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { DienThoaiModule } from './dien-thoai/dien-thoai.module';
import { AppleModule } from './Apple/apple.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    CoreModule,
    HomeModule,
    ProductModule,
    DienThoaiModule,
    AppleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
