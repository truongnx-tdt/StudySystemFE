import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private service: AuthService, private toastr: ToastrService) { }
  doLogout() {
    const confirmation = confirm('Do you want to logout');
    if (confirmation) {
      try {
        this.service.logout().subscribe(res => {
          this.router.navigate([""]);
          sessionStorage.clear();
        }, error => {
          console.log(error);
          this.toastr.error("Must validate code before logout");
        });
      } catch (error) {
        console.log(error);
        this.toastr.warning("Error");
      }
    }
  }
}
