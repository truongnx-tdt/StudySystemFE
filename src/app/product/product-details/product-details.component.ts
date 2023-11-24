import { BreadcrumbService } from 'xng-breadcrumb';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // convert to html
  htmlContent!: SafeHtml;
  showFullContent = false; 
  dataProductDetail: any;
  constructor(private productService: ProductService, private route: ActivatedRoute, private brcrumb: BreadcrumbService, private authService: AuthService, private noti: ToastrService, private sanitizer: DomSanitizer) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProductDetail();
  }



  getProductDetail() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.productService.getProductDetail(id).subscribe(res => {
      this.dataProductDetail = res;
      this.brcrumb.set('@productDetail', res.productName);
      this.brcrumb.set('@detail', res.productCategory);
      // lưu sản phẩm đã xem vào localstorage
      const viewedProductsString = localStorage.getItem('viewedProducts');
      let viewedProducts = viewedProductsString ? JSON.parse(viewedProductsString) : [];
      console.log(viewedProducts)
      // Check if productId already exists in viewedProducts
      const existingProductIndex = viewedProducts.findIndex((productId: any) => productId.productId === res.productId);

      // If not exists, add it to the array
      if (existingProductIndex === -1) {
        viewedProducts.push({ productId: res.productId });

        // Save the updated array to Local Storage
        localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
      }
      // convert des to html
      const rawHtml = res.productDescription;

      // Sanitize the HTML content to prevent security issues
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
    }, error => {
      console.log(error)
    });
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
  // show content
  toggleContentVisibility() {
    this.showFullContent = !this.showFullContent;
  }
  
} 
