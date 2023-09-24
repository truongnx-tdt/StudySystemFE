import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private formBuilder: FormBuilder, private service: AuthService, private toastr: ToastrService) {

  }

  loginFormGroup = this.formBuilder.group({
    userID: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required),
  });

  response: any;

  async isProcessedLogin() {
    if (this.loginFormGroup.valid) {
      try {
        await this.service.doLogin(this.loginFormGroup.value).subscribe(res => {
          this.response = res;
          const tokens = this.response.response.data.token.split(".");
          const tokenFinal = tokens.slice(0, tokens.length - 1).join(".");
          if (this.response.code == 200 && this.response.response && this.response.response.success == true && this.response.response.data.isActive == true) {
            sessionStorage.setItem('token', tokenFinal);
            this.router.navigate(['home']);
          } else if (this.response.code == 200 && this.response.response && this.response.response.success == true && this.response.response.data.isActive == false) {
            sessionStorage.setItem('token', tokenFinal);
            this.router.navigate(['verify-email']);
          } else if (this.response.code == 400) {
            this.toastr.warning(this.response.response.data.errorMessage);
          }
        }, (error) => {
          console.log(error);
          this.toastr.warning('Connect to server error', 'Error')
        });

      } catch (error) {
        this.toastr.error("Login fail: " + error, 'Error')
      }

    } else {
      this.toastr.error('Invalid input')
    }
  }

}
