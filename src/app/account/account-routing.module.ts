import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { authGuard } from '../guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'Đăng nhập' } },
  { path: 'register', component: RegisterComponent, data: { breadcrumb: 'Đăng ký' } },
  { path: 'forgot-password', component: ForgotPasswordComponent, data: { breadcrumb: 'Quên mật khẩu' } },
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
