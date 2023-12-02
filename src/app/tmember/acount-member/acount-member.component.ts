import { Component } from '@angular/core';
import { TmemberService } from '../tmember.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-acount-member',
  templateUrl: './acount-member.component.html',
  styleUrls: ['./acount-member.component.css']
})
export class AcountMemberComponent {

  userInfor: any;

  constructor(private service: TmemberService, private spinner: NgxSpinnerService, private toastr: ToastrService) {

  }

  //#region start form
  // Biến để kiểm soát hiển thị/ẩn form đổi mật khẩu và form ban đầu
  isChangePasswordFormVisible: boolean = false;
  isInitialFormVisible: boolean = true;
  isUpdateAddressFormVisible: boolean = false;

  // Hàm để hiển thị form đổi mật khẩu và ẩn form ban đầu
  showChangePasswordForm() {
    this.isChangePasswordFormVisible = true;
    this.isInitialFormVisible = false;
    this.isUpdateAddressFormVisible = false;
  }

  // Hàm để ẩn form đổi mật khẩu và hiện lại form ban đầu
  showInitialForm() {
    this.isChangePasswordFormVisible = false;
    this.isInitialFormVisible = true;
    this.isUpdateAddressFormVisible = false;
  }

  showUpdateAddressForm() {
    this.isChangePasswordFormVisible = false;
    this.isInitialFormVisible = false;
    this.isUpdateAddressFormVisible = true;
  }
  //#endregion

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    try {
      this.spinner.show();
      this.service.getUserById().subscribe(data => {
        setTimeout(() => {
          this.userInfor = data;
          this.spinner.hide();
        }, 1000)
      }, error => {
        console.error(error)
        this.toastr.error(error);
        this.spinner.hide();
      });
    } catch (error) {
      console.log(error);
    }
  }
}
