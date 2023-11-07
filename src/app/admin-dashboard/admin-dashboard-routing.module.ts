import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

const routes: Routes = [
  {
    path: '', component: TrangChuComponent
  },
  {
    path: 'product',
    loadChildren: () => import("./product/product.module").then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
