import { Component } from '@angular/core';

@Component({
  selector: 'app-history-oder',
  templateUrl: './history-oder.component.html',
  styleUrls: ['./history-oder.component.css']
})
export class HistoryOderComponent {
  selectedButton: string = 'null';

  showContent(button: string): void {
    this.selectedButton = button;
  }
}
