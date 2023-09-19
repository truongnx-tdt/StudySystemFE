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
      await this.service.doLogin(this.loginFormGroup.value).subscribe(res => {
        this.response = res;
        console.log(this.response)
        // if(this.response.code == 200 && this.response.response && this.response.response.success == true && this.response.response.success == true)
      })

    } else {
      this.toastr.error('Invalid input')
    }
  }

}
