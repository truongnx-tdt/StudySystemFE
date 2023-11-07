import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    TrangChuComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
