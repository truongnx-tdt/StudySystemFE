import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-carousel-product',
  templateUrl: './carousel-product.component.html',
  styleUrls: ['./carousel-product.component.css']
})
export class CarouselProductComponent {

  /**
   *
   */
  constructor(private noti: ToastrService, private authService: AuthService) {

  }
  toggleHeart(item: any) {
    if (this.authService.isUserLoggedIn()) {
      item.isLike = !item.isLike;
      if (item.isLike) {
        this.noti.success('Thêm ' + item.productName + ' vào danh sách yêu thích')
      }
    }
    else {
      this.noti.info('Bạn cần đăng nhập để sử dụng tính năng này.');
    }

  }
  @Input() items: any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    navSpeed: 700,
    navText: ['<i class="fal fa-chevron-left"></i>', '<i class="fal fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

}

