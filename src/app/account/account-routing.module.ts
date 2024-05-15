import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { authGuard } from '../guard/auth.guard';

const routes: Routes = [
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
