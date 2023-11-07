import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { authGuard } from './guard/auth.guard';
import { authIsactiveGuard } from './guard/auth-isactive.guard';
import { authRoleGuard } from './guard/auth-role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }, 
  // add lazy loading for account
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },

  // add lazy loading for member page
  {
    path: 'tmember',
    canActivate: [authGuard, authIsactiveGuard],
    loadChildren: () => import('./tmember/tmember.module').then(m => m.TmemberModule)
  },
  {
    path: 'admin',
    canActivate: [authGuard, authRoleGuard],
    data:{roles: ['admin']},
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  }
  ,
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
