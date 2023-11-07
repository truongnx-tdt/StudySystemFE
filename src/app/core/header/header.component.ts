import { Component, DoCheck, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/account.service';
import { HeaderService } from 'src/app/service/header.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  isLoggedIn: boolean = false;
  constructor(private router: Router, public service: AccountService, private toastr: ToastrService, public headerService: HeaderService) { }
//#region style for nav
  isHeaderFixed: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isHeaderFixed = scrollPosition > 500; // Thay 100 bằng ngưỡng bạn muốn cố định thanh điều hướng
  }
  fixedStyles = {
    'z-index': '1000',
    'position': 'fixed',
    'top': '0px',
    'color': 'blue',
    'margin-left': '0px',
    'width': '100%',
    'left': '0px',
    'box-shadow': '0'
  };

  defaultStyles = {
    'z-index': 'auto',
    'position': 'static',
    'top': 'auto'
  };
//#endregion
  login() {
    this.router.navigate(['/account/login']);
  }

  doLogout() {
    Swal.fire({
      title: "Bạn muốn đăng xuất?",
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: 'Đồng ý',
      denyButtonText: 'Không'
    }).then((rs) => {
      if (rs.isConfirmed) {
        try {
          this.service.logout().subscribe(res => {
            this.router.navigate([""]);
            this.isLoggedIn = false;
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
    })

  }
  isNavbarHidden: boolean = false;
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    const adminHidden = sessionStorage.getItem('roles');
    if (adminHidden === 'ADMIN') {
      this.isNavbarHidden = false;
    } else {
      this.isNavbarHidden = true;
    }
  }

}
