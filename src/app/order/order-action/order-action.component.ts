import { Component } from '@angular/core';
import { OrderService } from '../order.service';

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
  constructor(private orderService: OrderService) {
    const storedData = sessionStorage.getItem('listItemOrder');
    this.checkedList = storedData ? JSON.parse(storedData) : [];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.calculateTotalPrice()
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

}
