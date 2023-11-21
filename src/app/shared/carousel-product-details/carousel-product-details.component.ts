import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel-product-details',
  templateUrl: './carousel-product-details.component.html',
  styleUrls: ['./carousel-product-details.component.css']
})
export class CarouselProductDetailsComponent {
  @Input() items: any;
  constructor(private elRef: ElementRef) { this.items = DATA_BANNER; }
  customThumbsOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    navSpeed: 1000,
    lazyLoad: true,
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
    nav: true
  };

  mainData: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.mainData = this.items[1].img;
  }
  getData(item: any) {


    Promise.resolve().then(index => {
      const indext = item.startPosition;
      this.mainData = this.items[indext === this.items.length-1 ? 0 : (indext + 1)].img;
    })
  }

  getIndex(item: any) {
    this.mainData = item.img;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

}
const DATA_BANNER = [
  {
    img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/03/web-xiaomi-12-web.jpg',
    id: 'SP01',
  },
  {
    img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/08/1200x375-lnv.png',
    id: 'SP01',
  },
  {
    img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/10/31/1200x375-tuanlexiaomi-311023.jpg',
    id: 'SP01',
  },
  {
    img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/10/1200x375-lenovo.png',
    id: 'SP01',
  }, {
    img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/03/1200x375-zfoldzflip-031123.jpg',
    id: "SP01"
  }
];