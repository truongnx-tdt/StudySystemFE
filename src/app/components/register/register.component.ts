import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  registerFormGroup!: FormGroup;
  constructor(private service: RegisterService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) {
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerFormGroup = this.formBuilder.group({
      fullName: this.formBuilder.control('', Validators.required),
      userID: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.compose([Validators.email, Validators.required])),
      phoneNumber: this.formBuilder.control('', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.required])),
      gender: this.formBuilder.control('0'),
      address: this.formBuilder.control('')
    });
  }


  response: any;
  async processedRegister() {
    if (this.registerFormGroup.valid) {
      try {
        const res = await this.service.reisterProcessService(this.registerFormGroup.value).subscribe(res => {
          this.response = res;
          if (this.response.code === 200 && this.response.response && this.response.response.success === false) {
            this.toastr.error("Registration failed. Account already exists.");
          } else {
            this.toastr.success("register success");
            this.router.navigate(['login']);
          }
        }, (error) => {
          console.log(error);
          this.toastr.error("Can't connect to server.");
        });

      } catch (error) {
        console.log(error)
        this.toastr.error('Register fail: ' + error, 'Fail');
      }
    }
    else {
      if (this.registerFormGroup.get('email')?.invalid) {
        this.toastr.warning('Please enter email valid', 'Error');
      } else if (this.registerFormGroup.get('fullName')?.invalid) {
        this.toastr.warning('Please enter your fulll name', 'Error');
      } else if (this.registerFormGroup.get('username')?.invalid) {
        this.toastr.warning('Please enter your username', 'Error');
      } else if (this.registerFormGroup.get('password')?.invalid) {
        this.toastr.warning('Please enter your your password', 'Error');
      }
      else if (this.registerFormGroup.get('phoneNumber')?.invalid) {
        this.toastr.warning('Please enter your your phoneNumber', 'Error');
      }
    }
  }
}
