import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-order-action',
  templateUrl: './order-action.component.html',
  styleUrls: ['./order-action.component.css']
})
export class OrderActionComponent {
  checkedList: any[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  totalPriceWords: string = '';
  recipt: boolean = false;
  formOrder!: FormGroup;
  constructor(private orderService: OrderService, private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private spinner: NgxSpinnerService) {
    const storedData = sessionStorage.getItem('listItemOrder');
    this.checkedList = storedData ? JSON.parse(storedData) : [];
  }




  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.calculateTotalPrice()
    this.formOrder = this.formBuilder.group({
      userName: '',
      phoneNumber: '',
      email: '',
      receiveType: '1',
      province: '',
      addressReceive: '',
      note: '',
      district: '',
      methodPayment: '0',
      orderItemInsertData: [],
      totalAmount: this.totalPrice,
    })
  }
  calculateTotalPrice() {
    this.totalPrice = 0;
    this.totalQuantity = 0
    this.totalPriceWords = '';
    for (let index = 0; index < this.checkedList.length; index++) {
      const price = this.checkedList[index].priceSell > 0 ? this.checkedList[index].priceSell : this.checkedList[index].price;
      this.totalPrice += this.checkedList[index].quantity * price;
      this.totalQuantity += this.checkedList[index].quantity;
    }
    this.orderService.convertPriceToNumver(this.totalPrice).subscribe(res => {
      this.totalPriceWords = res
    })
  }

  reciptAddess(item: any) {
    this.recipt = !this.recipt;
  }


  processedOrder() {
    const orderData = { ...this.formOrder.value };
    orderData.orderItemInsertData = this.checkedList.map(item => {
      return {
        productId: item.productId,
        quantity: item.quantity,
        price: item.priceSell > 0 ? item.priceSell : item.price
      };
    });

    sessionStorage.setItem('userOrderInfor', JSON.stringify(orderData));

    if (orderData.methodPayment === '0') {
      this.processRemoveItemFromLocal();
      console.log(orderData)
      console.log("thanh toan sau nhan hang");

    } else {
      this.processRemoveItemFromLocal();
      this.processOrderVnPay(orderData);
    }
  }
  cartItem: any;
  processRemoveItemFromLocal() {
    if (!this.authService.isUserLoggedIn()) {
      this.cartItem = localStorage.getItem('cart');
      const storedList = JSON.parse(this.cartItem);
      const remainingItems = storedList.filter((item: any) => !this.itemInList(item, this.checkedList));
      localStorage.setItem('cart', JSON.stringify(remainingItems));
    }
  }

  itemInList(item: any, list: any[]): boolean {
    return list.some((itemToRemove: any) => itemToRemove.productId === item.productId);
  }

  processOrderVnPay(item: any) {
    this.spinner.show();
    this.orderService.processCreatedOrder(item).subscribe(res => {
      window.location.href = res
    })

  }
}
