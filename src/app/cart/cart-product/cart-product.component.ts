import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {
  /**
   *
   */
  constructor(private cartService: CartService, private toastr: ToastrService, private authService: AuthService) {
  }

  cartItems: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.processGetCart();
    if (!this.authService.isUserLoggedIn()) {
      this.isAllSelected();
    }

  };

  processGetCart() {
    this.cartService.getCartItems().subscribe(res => {
      this.cartItems = res;
      console.log(res)
    })
  }

  // handle for check
  masterSelected: boolean = false;
  checkedList: any;
  itemSelected: boolean = false;
  totalPrice: number = 0;
  checkUncheckAll() {
    for (var i = 0; i < this.cartItems.length; i++) {
      this.cartItems[i].isSelected = this.masterSelected;
    }
    this.cartService.updateCartItems(this.cartItems);
    this.getCheckedItemList();

  }
  isAllSelected() {
    this.masterSelected = this.cartItems.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
    this.cartService.updateCartItems(this.cartItems);

  }

  getCheckedItemList() {
    this.checkedList = [];
    this.totalPrice = 0;
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].isSelected) {
        this.checkedList.push(this.cartItems[i]);
        const price = this.cartItems[i].priceSell > 0 ? this.cartItems[i].priceSell : this.cartItems[i].price
        this.totalPrice += price * this.cartItems[i].quantity
      }
    }

    this.itemSelected = this.checkedList.length > 0;
  }

  orderProduct() {
    console.log(this.checkedList)
  }
  // Hàm xử lý khi nút "+" được click
  increaseQuantity(index: number) {
    const maxQuantity = this.cartItems[index].totalQuantity;
    if (this.cartItems[index].quantity < maxQuantity) {
      this.cartItems[index].quantity++;
      this.cartService.updateCartItems(this.cartItems);
      this.calculationTotalPrice()
    } else {
      this.toastr.error('Sản phẩm đã đạt đến số lượng tối đa.');
    }
  }

  // Hàm xử lý khi nút "-" được click
  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      // Giảm số lượng nếu nó lớn hơn 1
      this.cartItems[index].quantity--;
      this.cartService.updateCartItems(this.cartItems);
      this.calculationTotalPrice()
    } else {
      this.toastr.error('Số lượng không thể giảm xuống dưới 1.');
    }
  }
  removeItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartService.updateCartItems(this.cartItems);
    }
  }


  removeItemsInCart() {
    this.checkedList = [];
    this.totalPrice = 0;

    for (let i = this.cartItems.length - 1; i >= 0; i--) {
      if (this.cartItems[i].isSelected) {
        this.cartItems.splice(i, 1);
      }
    }

    this.cartService.updateCartItems(this.cartItems);
  }

  calculationTotalPrice() {
    this.totalPrice = 0;
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].isSelected) {
        const price = this.cartItems[i].priceSell > 0 ? this.cartItems[i].priceSell : this.cartItems[i].price
        this.totalPrice += price * this.cartItems[i].quantity
      }
    }
  }

}

