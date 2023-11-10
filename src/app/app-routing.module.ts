import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { authGuard } from './guard/auth.guard';
import { authIsactiveGuard } from './guard/auth-isactive.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  // add lazy loading for account
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    data: { breadcrumb: 'Tài khoản' }
  },

  // add lazy loading for member page
  {
    path: 'tmember',
    canActivate: [authGuard, authIsactiveGuard],
    loadChildren: () => import('./tmember/tmember.module').then(m => m.TmemberModule)
  },
  // add lazy load for introduction
  {
    path: 'intro',
    loadChildren: () => import('./introduction-us/introduction-us.module').then(m => m.IntroductionUsModule)
  }
  ,
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
