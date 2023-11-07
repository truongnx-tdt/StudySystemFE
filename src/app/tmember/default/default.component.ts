import { Component } from '@angular/core';
import { TmemberService } from '../tmember.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  loadingTitle = "Loading...";
  userData: any;

  constructor(private service: TmemberService, private spinner: NgxSpinnerService, private toastr: ToastrService) {

  }
  ngOnInit() {
    this.getInforUser()
  }

  async getInforUser() {
    try {
      this.spinner.show();
      await this.service.getUserById().subscribe(data => {
        this.userData = data;
        this.spinner.hide();
      }, error => {
        console.error(error)
        this.toastr.error(error);
        this.spinner.hide();
      });
    } catch (error) {
      console.log(error);
      this.toastr.error("fail to load: " + JSON.stringify(error), 'Error')
    }
  }

}
