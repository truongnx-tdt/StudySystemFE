import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  /**
   *
   */
  constructor(private noti: ToastrService) {

  }
  @Input() title: any;
  @Input() items: any;
  toggleHeart(item: any) {
    item.isLike = !item.isLike;
    if (item.isLike) {
      this.noti.success('Thêm ' + item.name + ' vào danh sách yêu thích')
    }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  // config show more 
  displayedItems = 20; // Số lượng mục muốn hiển thị ban đầu
  remainingItems(): number {
    return this.items.length - this.displayedItems;
  }
  loadMore() {
    // Khi người dùng nhấn nút "Xem thêm"
    this.displayedItems += 20; // Tăng số lượng mục muốn hiển thị
  }
}
