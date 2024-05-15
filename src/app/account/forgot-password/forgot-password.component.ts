import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private router: Router, private dialog: MatDialog, public dialogRef: MatDialogRef<ForgotPasswordComponent>) {
    if (sessionStorage.getItem('token')) {
      this.router.navigate(['home']);
    }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  login() {
    // this.router.navigate(['/account/login']);
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(LoginComponent, dialogConfig);
    this.dialogRef.close();
  }

   isProcessForgorPassword(){
    console.log('s')
   }


}
