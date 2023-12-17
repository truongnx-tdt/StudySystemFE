import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllNewsComponent } from './list-all-news/list-all-news.component';

const routes: Routes = [
  {
    path: '', component: ListAllNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
