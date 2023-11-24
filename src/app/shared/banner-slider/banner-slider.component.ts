import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css']
})
export class BannerSliderComponent {
  @Input() items: any;
  constructor() {
    this.items = DATA_BANNER;
  }
  customBannerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    navSpeed: 1000,
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}

const DATA_BANNER = [{
  img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/03/web-xiaomi-12-web.jpg',
  id: 'SP01'
},
{
  img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/08/1200x375-lnv.png',
  id: 'SP01'
},
{
  img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/10/31/1200x375-tuanlexiaomi-311023.jpg',
  id: 'SP01'
},
{
  img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/10/1200x375-lenovo.png',
  id: 'SP01'
},

{
  img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/15/hoangha-1200x382.jpg',
  id: 'SP01'
}
];
