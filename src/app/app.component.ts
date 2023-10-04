import { Component, OnInit, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StudySystem';
  constructor(private router: Router, private service: AuthService, private toastr: ToastrService) { }


  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }
  doLogout() {
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
