import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  valueSearch: any;
  forgotForm!: FormGroup;
  constructor(private router: Router, private dialog: MatDialog, public dialogRef: MatDialogRef<ForgotPasswordComponent>, private formBuilder: FormBuilder, private toastr: ToastrService, private userService: AccountService, private spinner: NgxSpinnerService) {
    if (sessionStorage.getItem('token')) {
      this.router.navigate(['home']);
    }
    this.forgotForm = this.formBuilder.group({
      userID: this.formBuilder.control('', Validators.required),
      verificationCode: this.formBuilder.control(''),
      newPassword: this.formBuilder.control(''),
      confirmPassword: this.formBuilder.control(''),
    }, { validator: this.passwordMatchValidator });

    this.forgotForm.get('newPassword')?.valueChanges.subscribe(() => {
      this.checkPasswords();
    });

    this.forgotForm.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.checkPasswords();
    });

    this.forgotForm.get('verificationCode')?.disable();
    this.forgotForm.get('newPassword')?.disable();
    this.forgotForm.get('confirmPassword')?.disable();
  }

  checkPasswords() {
    const newPassword = this.forgotForm.get('newPassword')?.value;
    const confirmPassword = this.forgotForm.get('confirmPassword')?.value;

    this.is_not_map = newPassword !== confirmPassword;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')?.value === form.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }


  login() {
    // this.router.navigate(['/account/login']);
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(LoginComponent, dialogConfig);
    this.dialogRef.close();
  }

  check_exists: boolean = false;
  async isProcessForgorPassword() {
    await this.spinner.show();
    if (this.forgotForm.valid) {
      await this.userService.findAcount(this.forgotForm.value).subscribe(res => {
        this.check_exists = res.response.success;
        if (this.check_exists) {
          this.forgotForm.get('userID')?.disable();
          this.forgotForm.get('verificationCode')?.enable();
          this.forgotForm.get('newPassword')?.enable();
          this.forgotForm.get('confirmPassword')?.enable();
        } else {
          this.toastr.error("Không tìm thấy tài khoản bạn vừa nhập", 'Error');
        }
        this.spinner.hide();
      }, (error) => {
        console.log(error);
      });

    } else {
      if (this.forgotForm.errors) {
        this.toastr.error("Mật khẩu không trùng khớp", 'Error')
      } else {
        this.toastr.error("Vui lòng nhập tài khoản hoặc email của bạn", 'Error')
      }
    }
  }
  is_not_map: boolean = false;
  checkNotMap(event: any) {
    if (this.forgotForm.get('newPassword')?.value != this.forgotForm.get('confirmPassword')?.value) {
      this.is_not_map = true;
    }
  }

  async ResetPassword() {
    await this.spinner.show();
    if (!this.is_not_map && this.forgotForm.get('verificationCode')?.value !== '' && this.forgotForm.get('newPassword')?.value !== '' && this.forgotForm.get('confirmPassword')?.value !== '') {
      await this.userService.forgotPassword(this.forgotForm.value).subscribe(res => {
        if (res.response.success) {
          this.toastr.success("Thay đổi mật khẩu thành công", 'Chức mừng')
          this.login();
        } else {
          this.toastr.error("Có lỗi xảy ra vui lòng kiểm tra lại mã xác nhận", 'Error')
        }
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
    } else {
      this.toastr.error("Vui lòng nhập dữ liệu chính xác", 'Error')
      this.spinner.hide();

    }

  }
}
