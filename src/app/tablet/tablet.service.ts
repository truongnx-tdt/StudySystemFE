import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabletService {

  
  private products = DATA_PRODUCT;
  filteredProducts: any;
  getProductsByCategory(): Observable<any[]> {
    this.filteredProducts = this.products.filter(product => product.categoryId === 'dien-thoai');
    return of(this.filteredProducts);
  }


  getProductsByBrand(id: any): Observable<any[]> {
    const filteredProducts = this.products.filter(product => product.brandId === id);
    return of(filteredProducts);
  }

}

const DATA_PRODUCT = [
  {
    id: 'SP08',
    name: 'Túi xách Laptop SIMTOP SuperSlim 15.6"',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '',
    category: 'Điện thoại',
    categoryId: 'dien-thoai',
    brandId: 'oppo',
    idWish: '01',
    isLike: true,
  }, {
    id: 'SP07',
    name: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng ',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    idWish: '02',
    isLike: true,
    category: 'Điện thoại',
    brandId: 'oppo',
    categoryId: 'dien-thoai',
  },
  {
    id: 'SP06',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    idWish: '',
    isLike: false, category: 'apple',
    brandId: 'apple',
    categoryId: 'apple',
  },
  {
    id: 'SP05',
    name: 'Ốp lưng GEAR4 D3O Crystal Palace Galaxy S22 Plus - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '',
    category: 'apple',
    brandId: 'apple',
    categoryId: 'apple',
  },
  {
    id: 'SP04',
    name: 'Nokia C21 Plus (6GB/64GB) - Chính hãng',
    img: 'apple-watch.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '',
    category: 'Điện thoại',
    brandId: 'realme',
    categoryId: 'dien-thoai',
  },
  {
    id: 'SP03',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP02',
    name: 'Máy tính bảng Huawei Matepad LTE - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  }, {
    id: 'SP08',
    name: 'Túi xách Laptop SIMTOP SuperSlim 15.6"',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '',
    idWish: '01',
    isLike: true, category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  }, {
    id: 'SP07',
    name: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng ',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    idWish: '02',
    isLike: true, category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP06',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    idWish: '',
    isLike: false, category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP05',
    name: 'Ốp lưng GEAR4 D3O Crystal Palace Galaxy S22 Plus - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP04',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: 'apple-watch.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP03',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP02',
    name: 'Máy tính bảng Huawei Matepad LTE - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  }, {
    id: 'SP08',
    name: 'Túi xách Laptop SIMTOP SuperSlim 15.6"',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '',
    idWish: '01',
    isLike: true, category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  }, {
    id: 'SP07',
    name: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng ',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    idWish: '02',
    isLike: true, category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP06',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    idWish: '',
    isLike: false, category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP05',
    name: 'Ốp lưng GEAR4 D3O Crystal Palace Galaxy S22 Plus - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP04',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: 'apple-watch.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP03',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP02',
    name: 'Máy tính bảng Huawei Matepad LTE - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  }, {
    id: 'SP08',
    name: 'Túi xách Laptop SIMTOP SuperSlim 15.6"',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '',
    idWish: '01',
    isLike: true, category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  }, {
    id: 'SP07',
    name: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng ',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    idWish: '02',
    isLike: true, category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP06',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    idWish: '',
    isLike: false, category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP05',
    name: 'Ốp lưng GEAR4 D3O Crystal Palace Galaxy S22 Plus - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP04',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: 'apple-watch.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP03',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  },
  {
    id: 'SP02',
    name: 'Máy tính bảng Huawei Matepad LTE - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '', category: 'Laptop',
    brandId: 'MSI',
    categoryId: 'lap-top',
  }
];
