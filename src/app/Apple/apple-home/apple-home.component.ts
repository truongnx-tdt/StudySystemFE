import { Component } from '@angular/core';
import { AppleService } from '../apple.service';

@Component({
  selector: 'app-apple-home',
  templateUrl: './apple-home.component.html',
  styleUrls: ['./apple-home.component.css']
})
export class AppleHomeComponent {
  /**
   *
   */
  constructor(private appleService: AppleService) {
    this.items = this.appleService.getImgAppleBanner()
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAirPods();
    this.getAppleWacth();
    this.getIpad();
    this.getIphone();
    this.getMac();
  }

  items: any;

  iphoneList: any;
  ipadList: any;
  macList: any;
  appleWatchList: any;
  airPods: any;

  getIphone() {
    this.appleService.getAppleProduct('iphone').subscribe(res => {
      this.iphoneList = res;
    });
  }

  getIpad() {
    this.appleService.getAppleProduct('ipad').subscribe(res => {
      this.ipadList = res;
    });
  }
  getMac() {
    this.appleService.getAppleProduct('mac').subscribe(res => {
      this.macList = res;
    });
  }
  getAppleWacth() {
    this.appleService.getAppleProduct('apple-watch').subscribe(res => {
      this.appleWatchList = res;
    });
  }

  getAirPods() {
    this.appleService.getAppleProduct('airpods').subscribe(res => {
      this.airPods = res;
    });
  }

}
