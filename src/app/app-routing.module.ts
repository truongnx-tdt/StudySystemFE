import { DienThoaiRoutingModule } from './dien-thoai/dien-thoai-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/section-home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { authGuard } from './guard/auth.guard';
import { authIsactiveGuard } from './guard/auth-isactive.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {
      breadcrumb: {
        label: 'Trang chủ', info: 'home'
      }
    }
  },
  {
    path: 'home', component: HomeComponent, data: {
      breadcrumb: {
        label: 'Trang chủ', info: 'home'
      }
    }
  },
  // add lazy loading for account
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    data: {
      breadcrumb: { skip: true, alias: 'mentorAdd' }
    }
  },

  // add lazy loading for member page
  {
    path: 'tmember',
    canActivate: [authGuard, authIsactiveGuard],
    loadChildren: () => import('./tmember/tmember.module').then(m => m.TmemberModule),
    data: {
      breadcrumb: { skip: true, alias: 'mentorAdd' }
    }
  },
  // add lazy load for introduction
  {
    path: 'intro',
    loadChildren: () => import('./introduction-us/introduction-us.module').then(m => m.IntroductionUsModule),
    data: {
      breadcrumb: { skip: true, alias: 'mentorAdd' }
    }
  },
  // add lazy load dien thoai
  {
    path: 'dien-thoai',
    loadChildren: () => import('./dien-thoai/dien-thoai.module').then(m => m.DienThoaiModule),
    data: {
      breadcrumb: { alias: 'dienThoai' }
    }
  },
  // add lazy load apple
  {
    path: 'apple',
    loadChildren: () => import('./Apple/apple.module').then(m => m.AppleModule),
    data: { breadcrumb: { skip: true, alias: 'skipApple' } }
  }
  ,
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
