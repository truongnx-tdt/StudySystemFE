import { Component } from '@angular/core';
import { TmemberService } from '../tmember.service';

@Component({
  selector: 'app-acount-member',
  templateUrl: './acount-member.component.html',
  styleUrls: ['./acount-member.component.css']
})
export class AcountMemberComponent {

  userInfor: any;

  constructor(private service: TmemberService) {

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
    try {
      this.service.getUserById().subscribe(data => {
        this.userInfor = data;
      }, error => {
        console.error(error)
      });
    } catch (error) {
      console.log(error);
    }
  }
}
