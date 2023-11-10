import { Component, OnInit, isDevMode } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tshops';

  constructor(public auth: AuthService) {
    // sessionStorage.clear();
  }

  ngOnInit() {
   
    // user login-onl check
    this.isUserOnl()
  }

  // user Onl
  isUserOnl() {
    // Thiết lập hàm định thời để gọi lại sau mỗi 5 phút
    if (this.auth.isUserLoggedIn()) {
      setInterval(() => {
        if (this.auth.isUserLoggedIn()) {
          this.auth.isUserOnl().subscribe(response => {
            console.log('user-onl');
          }, error => {
            // sessionStorage.clear();
            // window.location.reload();
          });
        }
      }, 5 * 60 * 1000);
    }
  }


}
