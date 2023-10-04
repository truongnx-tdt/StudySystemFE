import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormGroup!: FormGroup;
  loadingTitle = "Loading...";
  constructor(private router: Router, private formBuilder: FormBuilder, private service: AuthService, private toastr: ToastrService, private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginFormGroup = this.formBuilder.group({
      userID: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required),
    });
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }


  response: any;
  error: any;
  async isProcessedLogin() {
    if (this.loginFormGroup.valid) {
      this.loadingTitle = "Signing in...";
      await this.spinner.show();
      try {
        await this.service.doLogin(this.loginFormGroup.value).subscribe(res => {
          this.response = res;
          console.log(this.response);
          const tokens = this.response.response.data.token.split(".");
          const tokenFinal = tokens.slice(0, tokens.length - 1).join(".");
          if (this.response.code === 200 && this.response.response && this.response.response.success === true && this.response.response.data.isActive === true) {
            sessionStorage.setItem('token', tokenFinal);
            this.router.navigate(['home']);
          } else if (this.response.code === 200 && this.response.response && this.response.response.success === true && this.response.response.data.isActive === false) {
            sessionStorage.setItem('token', tokenFinal);
            this.router.navigate(['verify-email']);
          }
          this.spinner.hide();
        }, (error) => {
          this.error = error;
          if (error.status === 400) {
            this.toastr.error(this.error.error.response.data.errorMessage, 'Error');
          } else {
            this.toastr.warning("Connection to server error", 'Error');
          }
          this.spinner.hide();
        });

      } catch (error) {
        console.log(error);
        this.toastr.error("Login fail: " + JSON.stringify(error), 'Error')
      }

    } else {
      this.toastr.error('Invalid input')
    }
  }

}
