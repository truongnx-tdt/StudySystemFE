import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: any;
  private imgSubscription!: Subscription;
  
  constructor(private homeSevice: HomeService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.imgSubscription = this.homeSevice.getImgsSupplier().subscribe(imgs => {
      this.images = imgs
    })
  }

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    infinite: true,
    lazyLoad: "ondemand",
    pauseOnHover: true,
  };


  ngOnDestroy(): void {
    if (this.imgSubscription) {
      console.log("destroy");
      this.imgSubscription.unsubscribe();
    }
  }
}
