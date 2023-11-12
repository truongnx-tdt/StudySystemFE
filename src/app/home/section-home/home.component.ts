import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  itemsProduct: any;
  constructor() {
    this.itemsProduct = DATA_PRODUCT;
  }
}
const DATA_PRODUCT = [
  {
    id: 'SP01',
    name: 'Túi xách Laptop SIMTOP SuperSlim 15.6"',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: ''
  }, {
    id: 'SP01',
    name: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng ',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000'
  },
  {
    id: 'SP01',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000'
  },
  {
    id: 'SP01',
    name: 'Ốp lưng GEAR4 D3O Crystal Palace Galaxy S22 Plus - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000'
  },
  {
    id: 'SP01',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: 'apple-watch.jpg',
    price: '4000000',
    priceSell: '29000000'
  },
  {
    id: 'SP01',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000'
  },
  {
    id: 'SP01',
    name: 'Máy tính bảng Huawei Matepad LTE - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000'
  }
];