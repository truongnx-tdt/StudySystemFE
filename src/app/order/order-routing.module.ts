import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderActionComponent } from './order-action/order-action.component';

const routes: Routes = [
  {
    path: '', component: OrderActionComponent, data: { breadcrumb: { skip: true } }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
